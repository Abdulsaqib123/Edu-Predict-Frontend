import { toast } from "react-toastify";
import "./successToast.css";

const successToast = (message) => {
  return toast.success(`${message}`, {
    draggable: true,
    className: "successToast",
  });
};

export default successToast;
