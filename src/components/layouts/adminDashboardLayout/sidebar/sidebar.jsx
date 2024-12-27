import React from "react";
import { Link } from "react-router-dom";

const AdminDashboardSidebar = ({ isOpen }) => {
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
                  to={"/admin/dashboard"}
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
                  to={"/admin/roles"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white group hover:bg-primaryColor transition-all border-[1px] border-primaryColor hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white"
                  >
                    <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
                  </svg>
                  <span className="ml-3">Roles</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/admin/students"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white group hover:bg-primaryColor transition-all border-[1px] border-primaryColor hover:text-white"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    fill="currentColor"
                  >
                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
                  </svg>
                  <span className="ml-3">Students</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/admin/teachers"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white group hover:bg-primaryColor transition-all border-[1px] border-primaryColor hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white"
                  >
                    <path d="M208 352c-2.4 0-4.8 .4-7.1 1.1C188 357.3 174.4 360 160 360c-14.4 0-28-2.7-41-6.9-2.3-.7-4.7-1.1-7.1-1.1C49.9 352-.3 402.5 0 464.6 .1 490.9 21.7 512 48 512h224c26.3 0 47.9-21.1 48-47.4 .3-62.1-49.9-112.6-112-112.6zm-48-32c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zM592 0H208c-26.5 0-48 22.3-48 49.6V96c23.4 0 45.1 6.8 64 17.8V64h352v288h-64v-64H384v64h-76.2c19.1 16.7 33.1 38.7 39.7 64H592c26.5 0 48-22.3 48-49.6V49.6C640 22.3 618.5 0 592 0z" />
                  </svg>
                  <span className="ml-3">Teachers</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminDashboardSidebar;
