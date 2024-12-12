import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layouts/userLayout/layout";
import HomePage from "./modules/user/pages/home/home";
import LoginPage from "./modules/user/pages/login/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./components/layouts/dashboardLayout/layout";
import DashboardPage from "./modules/user/pages/dashboard/dashboard";
import PrivateRoute from "./privateRoute/privateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route exact path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<PrivateRoute element={<DashboardPage />} />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
