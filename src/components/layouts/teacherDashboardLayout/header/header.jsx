import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";

const TeacherDashboardHeader = ({ singleUser, toggleSidebar }) => {
  const { logoutUser } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    await logoutUser();
    router("/login");
  };

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [router]);

  return (
    <nav className="fixed z-30 w-full bg-primaryColor">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              onClick={toggleSidebar}
              className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-primaryColor focus:bg-gray-100 dark:focus:bg-primaryColor focus:ring-2 focus:ring-gray-100 dark:focus:ring-primaryColor dark:text-gray-400 dark:hover:bg-primaryColor dark:hover:text-white"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                class="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <Link to={"/admin/dashboard"} className="flex ml-2 md:mr-24">
              <img
                src="/assets/images/brands/logo-light.png"
                className="h-11 mr-3"
                alt="FlowBite Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden mr-3 -mb-1 sm:block">
              <span></span>
            </div>
            <div className="flex items-center ml-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-white dark:focus:ring-white"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/assets/images/avatar.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              {isDropdownOpen && (
                <div
                  className="z-50 my-4 text-base list-none bg-white divide-y divide-primaryColor rounded shadow-lg border-[1px] border-primaryColor"
                  id="dropdown-2"
                  style={{
                    position: "absolute",
                    margin: "0px",
                    top: "76px",
                    right: "20px",
                  }}
                >
                  <div className="px-4 py-3">
                    <p className="text-sm text-black">
                      {singleUser?.first_name} {singleUser?.last_name}
                    </p>
                    <p className="text-sm font-medium text-primaryColor">
                      {singleUser?.email}
                    </p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <Link
                        to={"/teacher/`dashboard"}
                        className="block px-4 py-2 text-sm"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2 text-sm"
                        onClick={handleLogout}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TeacherDashboardHeader;
