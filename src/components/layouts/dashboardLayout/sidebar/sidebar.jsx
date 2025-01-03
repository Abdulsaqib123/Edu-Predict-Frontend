import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";

const DashboardSidebar = ({ isOpen }) => {
  const { logoutUser } = useContext(AuthContext);
  const router = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    router("/login");
  };
  return (
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 lg:w-64 w-56 h-full pt-16 font-normal duration-75 transition-width ${
        // isOpen ? "lg:flex" : "hidden"
        `lg:flex hidden`
      }`}
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200">
        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1 divide-y divide-gray-200">
            <ul className="pb-2 space-y-4 lg:mt-4 mt-0">
              <li>
                <Link
                  to={"/dashboard"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white group hover:bg-primaryColor transition-all border-[1px] border-primaryColor hover:text-white"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/reports"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white group hover:bg-primaryColor transition-all border-[1px] border-primaryColor hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white"
                    fill="currentColor"
                  >
                    <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
                  </svg>
                  <span className="ml-3">Reports</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/notifications"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white group hover:bg-primaryColor transition-all border-[1px] border-primaryColor hover:text-white"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                  </svg>
                  <span className="ml-3">Notifications</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/profile"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white group hover:bg-primaryColor transition-all border-[1px] border-primaryColor hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white"
                    fill="currentColor"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                  </svg>
                  <span className="ml-3">Profile</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white group hover:bg-primaryColor transition-all border-[1px] border-primaryColor hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white"
                    fill="currentColor"
                  >
                    <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" />
                  </svg>
                  <span className="ml-3">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
