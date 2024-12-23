import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import TeacherDashboardHeader from "./header/header";
import TeacherDashboardSidebar from "./sidebar/sidebar";

const TeacherDashboardLayout = () => {
  const { getSingleUser, singleUser } = useContext(UserContext);
  const user_id = localStorage.getItem("user_id");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useNavigate();

  useEffect(() => {
    if (user_id) {
      getSingleUser(user_id);
    }
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [router]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <TeacherDashboardHeader
        singleUser={singleUser}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex pt-16 overflow-hidden">
        <TeacherDashboardSidebar isOpen={isSidebarOpen} />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-8 px-4">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TeacherDashboardLayout;
