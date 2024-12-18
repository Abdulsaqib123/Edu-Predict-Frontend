import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const RoleContext = createContext();

export const RoleContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [rolesList, setRolesList] = useState();
  const [singleRoleLoader, setSingleRoleLoader] = useState(false);
  const [singleRole, setSingleRole] = useState();

  const getRolesList = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/roles/index`
      );
      setRolesList(res?.data.roles);
      setLoading(false);
    } catch (err) {
      errorToast(err.response?.data?.message);
      setLoading(false);
      console.log(err);
    }
  };

  const createRole = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENV}/roles/create`,
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

  const updateRole = async (id, data) => {
    setLoading(true);
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BACKEND_ENV}/roles/update/${id}`,
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

  const deleteRole = async (id) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_ENV}/roles/delete/${id}`
      );
      setLoading(false);
      successToast(res?.data?.message);
      getRolesList();
    } catch (err) {
      errorToast(err.response?.data?.message);
      setLoading(false);
      console.log(err);
    }
  };

  const getSingleRole = async (id) => {
    setSingleRoleLoader(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/roles/show/${id}`
      );
      setSingleRole(res?.data.role);
      setSingleRoleLoader(false);
    } catch (err) {
      console.log(err);
      setSingleRoleLoader(false);
    }
  };

  return (
    <RoleContext.Provider
      value={{
        loading,
        getRolesList,
        deleteRole,
        createRole,
        getSingleRole,
        updateRole,
        singleRole,
        singleRoleLoader,
        rolesList,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};
