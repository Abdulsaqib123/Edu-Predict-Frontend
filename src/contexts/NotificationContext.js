import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [notificationsList, setNotificationsList] = useState();
  const [singleNotificationLoader, setSingleNotificationLoader] =
    useState(false);
  const [singleNotification, setSingleNotification] = useState(null);

  const getNotificationsList = async (query = "") => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/notifications/index${query}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setNotificationsList(res?.data.notifications);
      setLoading(false);
    } catch (err) {
      errorToast(err.response?.data?.message);
      setLoading(false);
      console.log(err);
    }
  };

  const markAsRead = async (user_id, notification_id, query = "") => {
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_BACKEND_ENV}/notifications/mark-read/${user_id}/${notification_id}`
      );
      getNotificationsList(query);
      successToast(res?.data?.message);
    } catch (err) {
      errorToast(err.response?.data?.message);
      setLoading(false);
      console.log(err);
    }
  };

  const getSingleNotification = async (notificationId) => {
    setSingleNotificationLoader(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENV}/notifications/find/${notificationId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSingleNotification(res?.data.notification);
      setSingleNotificationLoader(false);
    } catch (err) {
      console.log(err);
      errorToast(err?.response?.data.message);
      setSingleNotificationLoader(false);
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        loading,
        getNotificationsList,
        getSingleNotification,
        singleNotification,
        singleNotificationLoader,
        markAsRead,
        notificationsList,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
