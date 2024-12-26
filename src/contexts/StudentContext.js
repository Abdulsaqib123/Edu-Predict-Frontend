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
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
