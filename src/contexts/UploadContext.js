import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const UploadContext = createContext();

export const UploadContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const UploadFile = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENV}/uploads/upload`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      successToast(res?.data.message);
      setLoading(false);
    } catch (err) {
      errorToast(err?.response?.data.message);
      setLoading(false);
    }
  };

  return (
    <UploadContext.Provider
      value={{
        loading,
        UploadFile,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
