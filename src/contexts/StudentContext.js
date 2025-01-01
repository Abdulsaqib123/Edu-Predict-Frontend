import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const StudentContext = createContext();

export const StudentContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [studentsList, setStudentsList] = useState();
  const [singleStudentLoader, setSingleStudentLoader] = useState(false);
  const [singleStudent, setSingleStudent] = useState(null);
  const [gradesData, setGradesData] = useState({
    labels: [],
    datasets: [],
  });
  const [attendanceProgress, setAttendanceProgress] = useState(null);
  const [modulesProgress, setModulesProgress] = useState([]);

  const getStudentsList = async (query = "") => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/students/index${query}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setStudentsList(res?.data.students);
      setLoading(false);
    } catch (err) {
      errorToast(err.response?.data?.message);
      setLoading(false);
      console.log(err);
    }
  };

  const createStudent = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENV}/students/create`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      successToast(res?.data.message);
      setLoading(false);
      return res?.data?.user;
    } catch (err) {
      errorToast(err?.response?.data.error);
      setLoading(false);
    }
  };

  const updateStudent = async (id, data) => {
    setLoading(true);
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BACKEND_ENV}/students/edit/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      successToast(res?.data.message);
      setLoading(false);
      return res?.data?.user;
    } catch (err) {
      errorToast(err?.response?.data.error);
      setLoading(false);
    }
  };

  const deleteStudent = async (id) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_ENV}/students/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setLoading(false);
      successToast(res?.data?.message);
      getStudentsList();
    } catch (err) {
      errorToast(err.response?.data?.message);
      setLoading(false);
      console.log(err);
    }
  };

  const getSingleStudent = async (userId) => {
    setSingleStudentLoader(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/students/find/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = res?.data?.educational_data_list;

      const studentData = data.flatMap((item) => item?.data);

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

      setSingleStudent(res?.data?.student);
      setSingleStudentLoader(false);
    } catch (err) {
      console.log(err);
      errorToast(err?.response?.data.message);
      setSingleStudentLoader(false);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        loading,
        getStudentsList,
        createStudent,
        deleteStudent,
        updateStudent,
        getSingleStudent,
        singleStudent,
        singleStudentLoader,
        studentsList,
        gradesData,
        attendanceProgress,
        modulesProgress,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
