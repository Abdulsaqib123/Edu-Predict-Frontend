import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const ReportContext = createContext();

export const ReportContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [reportsList, setReportsList] = useState();

  const getReportsList = async (query = "") => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/reports/index${query}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setReportsList(res?.data.reports);
      setLoading(false);
    } catch (err) {
      errorToast(err.response?.data?.message);
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <ReportContext.Provider
      value={{
        loading,
        getReportsList,
        reportsList,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};
