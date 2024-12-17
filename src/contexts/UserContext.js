import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [singleUserLoader, setSingleUserLoader] = useState(false);
  const [singleUser, setSingleUser] = useState(null);

  const createUser = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENV}/users/create`,
        data
      );
      successToast(res?.data.message);
      setLoading(false);
      return res?.data?.user;
    } catch (err) {
      errorToast(err?.response?.data.error);
      setLoading(false);
    }
  };

  const getSingleUser = async (userId) => {
    setSingleUserLoader(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/users/find/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSingleUser(res?.data.user);
      setSingleUserLoader(false);
    } catch (err) {
      console.log(err);
      errorToast(err?.response?.data.message);
      setSingleUserLoader(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        createUser,
        getSingleUser,
        singleUser,
        singleUserLoader,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
