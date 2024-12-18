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
import CreateAccountPage from "./modules/user/pages/register/register";
import DashboardDataIngestionPage from "./modules/user/pages/dashboard/dataIngestion/dataIngestion";
import AdminDashboardLayout from "./components/layouts/adminDashboardLayout/layout";
import AdminPrivateRoute from "./adminPrivateRoute/adminPrivateRoute";
import AdminDashboardPage from "./modules/admin/dashboard/dashboard";
import AdminRolesListPage from "./modules/admin/dashboard/roles/rolesList";
import AdminAddRolePage from "./modules/admin/dashboard/roles/addRole";
import AdminUpdateRolePage from "./modules/admin/dashboard/roles/updateRole";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
        </Route>

        <Route exact path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<PrivateRoute element={<DashboardPage />} />} />
          <Route
            path="data-ingestion"
            element={<PrivateRoute element={<DashboardDataIngestionPage />} />}
          />
        </Route>

        <Route exact path="/admin" element={<AdminDashboardLayout />}>
          <Route
            path="dashboard"
            element={<AdminPrivateRoute element={<AdminDashboardPage />} />}
          />
          <Route
            path="roles"
            element={<AdminPrivateRoute element={<AdminRolesListPage />} />}
          />
          <Route
            path="roles/add"
            element={<AdminPrivateRoute element={<AdminAddRolePage />} />}
          />
          <Route
            path="roles/edit/:id"
            element={<AdminPrivateRoute element={<AdminUpdateRolePage />} />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
