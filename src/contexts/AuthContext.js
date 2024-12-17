import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const loginUser = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENV}/auth/login`,
        data
      );
      successToast(res?.data.message);
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("user_id", res?.data?.user?._id);
      localStorage.setItem("role", res?.data?.user?.role?._id);
      setLoading(false);
      return res?.data;
    } catch (err) {
      errorToast(err?.response?.data.message);
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENV}/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("role");
      successToast(res?.data?.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
