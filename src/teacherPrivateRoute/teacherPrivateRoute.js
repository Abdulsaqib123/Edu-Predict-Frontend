import { Navigate } from "react-router-dom";

const TeacherPrivateRoute = ({ element }) => {
  const admin_token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");
  const role = localStorage.getItem("role");

  return admin_token && user_id && role === "67587c8e74cea1767a2e0582" ? (
    element
  ) : (
    <Navigate to={"/login"} />
  );
};

export default TeacherPrivateRoute;
