import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const SummaryContext = createContext();

export const SummaryContextProvider = ({ children }) => {
  const [dataIngestionSummary, setDataIngestionSummary] = useState(null);

  const getDataIngestionSummary = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/summary/data-ingestion`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDataIngestionSummary(res?.data?.summary);
    } catch (err) {
      console.log(err);
      errorToast(err?.response?.data.message);
    }
  };

  return (
    <SummaryContext.Provider
      value={{
        getDataIngestionSummary,
        dataIngestionSummary,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
};
