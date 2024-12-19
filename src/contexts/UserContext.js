import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useState();
  const [singleUserLoader, setSingleUserLoader] = useState(false);
  const [singleUser, setSingleUser] = useState(null);

  const getUsersList = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/users/index`
      );
      setUsersList(res?.data.users);
      setLoading(false);
    } catch (err) {
      errorToast(err.response?.data?.message);
      setLoading(false);
      console.log(err);
    }
  };

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

  const updateUser = async (id , data) => {
    setLoading(true);
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BACKEND_ENV}/users/edit/${id}`,
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

  const deleteUser = async (id) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_ENV}/users/delete/${id}`
      );
      setLoading(false);
      successToast(res?.data?.message);
      getUsersList();
    } catch (err) {
      errorToast(err.response?.data?.message);
      setLoading(false);
      console.log(err);
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
        getUsersList,
        deleteUser,
        updateUser,
        usersList,
        singleUser,
        singleUserLoader,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
