import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");
  const role = localStorage.getItem("role");

  return token && user_id && role === "67587c8e74cea1767a2e0583" ? (
    element
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PrivateRoute;
