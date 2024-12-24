import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [dashboardStats, setDashboardStats] = useState(null);
  const [teacherDashboardStats, setTeacherDashboardStats] = useState(null);

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

  return (
    <DashboardContext.Provider
      value={{
        getDashboardStats,
        getTeacherDashboardStats,
        teacherDashboardStats,
        dashboardStats,
        loading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
