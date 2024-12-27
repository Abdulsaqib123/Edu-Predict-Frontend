import { Outlet, useNavigate } from "react-router-dom";
import DashboardHeader from "./header/header";
import { UserContext } from "../../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import DashboardSidebar from "./sidebar/sidebar";

const DashboardLayout = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <DashboardHeader singleUser={singleUser} toggleSidebar={toggleSidebar} />
      <div className="flex pt-16 overflow-hidden">
        <DashboardSidebar isOpen={isSidebarOpen} />
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

export default DashboardLayout;
