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
import AdminDashboardLayout from "./components/layouts/adminDashboardLayout/layout";
import AdminPrivateRoute from "./adminPrivateRoute/adminPrivateRoute";
import AdminDashboardPage from "./modules/admin/dashboard/dashboard";
import AdminRolesListPage from "./modules/admin/dashboard/roles/rolesList";
import AdminAddRolePage from "./modules/admin/dashboard/roles/addRole";
import AdminUpdateRolePage from "./modules/admin/dashboard/roles/updateRole";
import AdminUsersListPage from "./modules/admin/dashboard/users/usersList";
import AdminAddUserPage from "./modules/admin/dashboard/users/addUser";
import AdminUpdateUserPage from "./modules/admin/dashboard/users/updateUser";
import AdminUserDetailPage from "./modules/admin/dashboard/users/userDetail";
import AdminTeachersListPage from "./modules/admin/dashboard/teachers/teachersList";
import AdminAddTeacherPage from "./modules/admin/dashboard/teachers/addTeacher";
import AdminUpdateTeacherPage from "./modules/admin/dashboard/teachers/updateTeacher";
import AdminTeacherDetailPage from "./modules/admin/dashboard/teachers/teacherDetail";
import TeacherDashboardLayout from "./components/layouts/teacherDashboardLayout/layout";
import TeacherPrivateRoute from "./teacherPrivateRoute/teacherPrivateRoute";
import TeacherDashboardPage from "./modules/teacher/dashboard/dashboard";
import TeacherStudentsListPage from "./modules/teacher/dashboard/students/studentsList";
import TeacherAddStudentPage from "./modules/teacher/dashboard/students/addStudent";
import TeacherUpdateStudentPage from "./modules/teacher/dashboard/students/updateStudent";
import TeacherStudentDetailPage from "./modules/teacher/dashboard/students/studentDetail";
import TeacherUploadResultsPage from "./modules/teacher/dashboard/uploadResults/uploadResults";
import StudentNotificationListPage from "./modules/user/pages/dashboard/notifications/notificationsList";
import StudentNotificationDetailPage from "./modules/user/pages/dashboard/notifications/notificationDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/create-account" element={<CreateAccountPage />} /> */}
        </Route>

        <Route exact path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<PrivateRoute element={<DashboardPage />} />} />
          <Route
            path="notifications"
            element={<PrivateRoute element={<StudentNotificationListPage />} />}
          />
          <Route
            path="notifications/:id"
            element={
              <PrivateRoute element={<StudentNotificationDetailPage />} />
            }
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

          <Route
            path="students"
            element={<AdminPrivateRoute element={<AdminUsersListPage />} />}
          />
          <Route
            path="students/add"
            element={<AdminPrivateRoute element={<AdminAddUserPage />} />}
          />
          <Route
            path="students/edit/:id"
            element={<AdminPrivateRoute element={<AdminUpdateUserPage />} />}
          />
          <Route
            path="students/:id"
            element={<AdminPrivateRoute element={<AdminUserDetailPage />} />}
          />

          <Route
            path="teachers"
            element={<AdminPrivateRoute element={<AdminTeachersListPage />} />}
          />
          <Route
            path="teachers/add"
            element={<AdminPrivateRoute element={<AdminAddTeacherPage />} />}
          />
          <Route
            path="teachers/edit/:id"
            element={<AdminPrivateRoute element={<AdminUpdateTeacherPage />} />}
          />
          <Route
            path="teachers/:id"
            element={<AdminPrivateRoute element={<AdminTeacherDetailPage />} />}
          />
        </Route>
        <Route exact path="/teacher" element={<TeacherDashboardLayout />}>
          <Route
            path="dashboard"
            element={<TeacherPrivateRoute element={<TeacherDashboardPage />} />}
          />

          <Route
            path="students"
            element={
              <TeacherPrivateRoute element={<TeacherStudentsListPage />} />
            }
          />
          <Route
            path="students/add"
            element={
              <TeacherPrivateRoute element={<TeacherAddStudentPage />} />
            }
          />
          <Route
            path="students/edit/:id"
            element={
              <TeacherPrivateRoute element={<TeacherUpdateStudentPage />} />
            }
          />
          <Route
            path="students/:id"
            element={
              <TeacherPrivateRoute element={<TeacherStudentDetailPage />} />
            }
          />

          <Route
            path="upload-results"
            element={
              <TeacherPrivateRoute element={<TeacherUploadResultsPage />} />
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
