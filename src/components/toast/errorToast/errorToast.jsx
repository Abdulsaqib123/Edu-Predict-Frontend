import { toast } from "react-toastify";
import "./errorToast.css";

const errorToast = (message) => {
  return toast.error(`${message}`, {
    draggable: true,
    className: "errorToast",
  });
};

export default errorToast;
