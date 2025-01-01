import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [dashboardStats, setDashboardStats] = useState(null);
  const [teacherDashboardStats, setTeacherDashboardStats] = useState(null);
  const [gradesData, setGradesData] = useState({
    labels: [],
    datasets: [],
  });
  const [attendanceProgress, setAttendanceProgress] = useState(null);
  const [modulesProgress, setModulesProgress] = useState([]);

  const getDashboardStats = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/dashboard/stats`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDashboardStats(res?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      errorToast(err?.response?.data.message);
      setLoading(false);
    }
  };

  const getTeacherDashboardStats = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/teacher/stats`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTeacherDashboardStats(res?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      errorToast(err?.response?.data.message);
      setLoading(false);
    }
  };

  const getStudentDashboardStats = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/students/stats`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = res?.data?.educational_data;

      if (!data || data.length === 0) {
        setLoading(false);
        return;
      }

      const studentData = data.flatMap((item) => item?.data);

      if (!studentData || studentData.length === 0) {
        setLoading(false);
        return;
      }

      // Assuming 'studentData' is an array with data like the one you've shared
      setGradesData({
        labels: [
          "English",
          "Urdu",
          "Math",
          "Science",
          "Literature",
          "Computer",
          "Social Studies",
        ], // These are the subjects
        datasets: studentData.map((record, index) => ({
          label: `Marks`, // Label for each student (e.g., Student 1)
          data: [
            record.english,
            record.urdu,
            record.math,
            record.science,
            record.literature,
            record.computer,
            record.social_studies,
          ], // Extracting the grades for each subject for the specific student
          backgroundColor: "#8a74ed", // Background color for bars
          borderColor: "#8a74ed", // Border color for bars
          borderWidth: 1, // Border width
        })),
      });

      // Initialize attendance progress object
      const attendanceProgress = {
        english: { total: 0, present: 0 },
        urdu: { total: 0, present: 0 },
        math: { total: 0, present: 0 },
        science: { total: 0, present: 0 },
        literature: { total: 0, present: 0 },
        computer: { total: 0, present: 0 },
        social_studies: { total: 0, present: 0 },
      };

      // Iterate over each student record
      studentData.forEach((record) => {
        const subjects = [
          "english",
          "urdu",
          "math",
          "science",
          "literature",
          "computer",
          "social_studies",
        ];

        subjects.forEach((subject) => {
          if (record.attendance_status === "Present") {
            attendanceProgress[subject].present += 1;
          }
          attendanceProgress[subject].total += 1;
        });
      });

      // Calculate percentage for each subject
      const attendancePercentage = Object.keys(attendanceProgress).map(
        (subject) => {
          const { total, present } = attendanceProgress[subject];
          const percentage = total === 0 ? 0 : (present / total) * 100;
          return { subject, progress: percentage };
        }
      );

      // Update state or handle attendancePercentage
      setAttendanceProgress(attendancePercentage);

      const moduleData = studentData.map((module) => ({
        module: module?.module,
        progress: parseInt(module?.progress.replace("%", "")),
      }));

      setModulesProgress(moduleData);

      setLoading(false);
    } catch (err) {
      console.log(err);
      errorToast(err?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        getDashboardStats,
        getTeacherDashboardStats,
        getStudentDashboardStats,
        gradesData,
        attendanceProgress,
        modulesProgress,
        teacherDashboardStats,
        dashboardStats,
        loading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
