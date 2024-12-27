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

      setGradesData({
        labels: studentData.map((record) => record?.subject),
        datasets: [
          {
            label: "Grades",
            data: studentData.map((record) => record?.score),
            backgroundColor: "#8a74ed",
            borderColor: "#8a74ed",
            borderWidth: 1,
          },
        ],
      });

      const attendanceProgress = {};

      studentData.forEach((record) => {
        const { subject, attendance_status } = record;

        if (!attendanceProgress[subject]) {
          attendanceProgress[subject] = { total: 0, present: 0 };
        }

        attendanceProgress[subject].total += 1;
        if (attendance_status === "Present") {
          attendanceProgress[subject].present += 1;
        }
      });

      const attendancePercentage = Object.keys(attendanceProgress).map(
        (subject) => {
          const { total, present } = attendanceProgress[subject];
          const percentage = total === 0 ? 0 : (present / total) * 100;
          return { subject, progress: percentage };
        }
      );

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
