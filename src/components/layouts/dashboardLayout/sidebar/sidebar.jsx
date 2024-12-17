import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = ({ isOpen }) => {
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
                  to={"/dashboard"}
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
                  to={"/dashboard/data-ingestion"}
                  className="flex items-center lg:p-4 p-3 lg:text-base text-sm text-black rounded-lg bg-white hover:bg-gray-100 group dark:text-black dark:hover:text-white dark:hover:bg-primaryColor transition-all border-[1px] border-primaryColor"
                >
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 442 442"
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-black dark:group-hover:text-white"
                  >
                    <g>
                      <path d="M331,0H111c-5.522,0-10,4.478-10,10v422c0,5.522,4.478,10,10,10h220c5.522,0,10-4.478,10-10V10C341,4.478,336.522,0,331,0z M321,20v191H121V20H321z M121,422V231h200v191H121z" />
                      <path d="M201,60h40c5.522,0,10-4.478,10-10s-4.478-10-10-10h-40c-5.522,0-10,4.478-10,10S195.478,60,201,60z" />
                      <path d="M201,271h40c5.522,0,10-4.478,10-10s-4.478-10-10-10h-40c-5.522,0-10,4.478-10,10S195.478,271,201,271z" />
                      <path d="M251,291h-60c-5.522,0-10,4.478-10,10v40c0,5.522,4.478,10,10,10h60c5.522,0,10-4.478,10-10v-40 C261,295.478,256.522,291,251,291z M241,331h-40v-20h40V331z" />
                      <path d="M191,140h60c5.522,0,10-4.478,10-10V90c0-5.522-4.478-10-10-10h-60c-5.522,0-10,4.478-10,10v40 C181,135.522,185.478,140,191,140z M201,100h40v20h-40V100z" />
                    </g>
                  </svg>
                  <span className="ml-3">Data Ingestion</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
