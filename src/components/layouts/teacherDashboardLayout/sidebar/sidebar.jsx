import React from "react";
import { Link } from "react-router-dom";

const TeacherDashboardSidebar = ({ isOpen }) => {
  return (
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 lg:w-64 w-56 h-full pt-16 font-normal duration-75 transition-width ${
        // isOpen ? "lg:flex" : "hidden"
        `lg:flex hidden`
      }`}
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-primaryColor/15 dark:border-primaryColor">
        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1 divide-y divide-gray-200 dark:divide-gray-700">
            <ul className="pb-2 space-y-4 lg:mt-4 mt-0">
              <li>
                <Link
                  to={"/teacher/dashboard"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white hover:bg-gray-100 group dark:text-black dark:hover:text-white dark:hover:bg-primaryColor transition-all border-[1px] border-primaryColor"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-black dark:group-hover:text-white"
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
                  to={"/teacher/students"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white hover:bg-gray-100 group dark:text-black dark:hover:text-white dark:hover:bg-primaryColor transition-all border-[1px] border-primaryColor"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-black dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Students</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/teacher/upload-results"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white hover:bg-gray-100 group dark:text-black dark:hover:text-white dark:hover:bg-primaryColor transition-all border-[1px] border-primaryColor"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-black dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Upload Results</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TeacherDashboardSidebar;
