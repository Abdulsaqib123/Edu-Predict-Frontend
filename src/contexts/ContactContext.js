import axios from "axios";
import { createContext, useState } from "react";
import errorToast from "../components/toast/errorToast/errorToast";
import successToast from "../components/toast/successToast/successToast";

export const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const addContact = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENV}/contacts/add`,
        data
      );
      successToast(res?.data.message);
      setLoading(false);
    } catch (err) {
      errorToast(err?.response?.data.error);
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        loading,
        addContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
