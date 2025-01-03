import { useContext, useEffect } from "react";
import { DashboardContext } from "../../../contexts/DashboardContext";

const AdminDashboardPage = () => {
  const { getDashboardStats, dashboardStats } = useContext(DashboardContext);

  useEffect(() => {
    getDashboardStats();
  }, []);

  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg">
            Admin Workflow
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7">
        <div className="bg-white shadow-lg shadow-primaryColor/20 flex items-center p-4 rounded-lg">
          <div className="icon sm:w-16 w-12 sm:h-16 h-12 bg-primaryColor/15 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-6 h-6 text-primaryColor transition duration-75 dark:text-primaryColor"
            >
              <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
            </svg>
          </div>
          <div className="border-l-2 border-primaryColor/5 pl-4 ml-4">
            <h3 className="font-semibold sm:text-base text-sm">Total Roles</h3>
            <p className="font-extrabold text-primaryColor sm:text-3xl text-2xl">
              {dashboardStats?.roles ? dashboardStats?.roles : 0}
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-primaryColor/20 flex items-center p-4 rounded-lg">
          <div className="icon sm:w-16 w-12 sm:h-16 h-12 bg-primaryColor/15 flex items-center justify-center rounded-full">
            <svg
              className="w-6 h-6 text-primaryColor transition duration-75 dark:text-primaryColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill="currentColor"
            >
              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
            </svg>
          </div>
          <div className="border-l-2 border-primaryColor/5 pl-4 ml-4">
            <h3 className="font-semibold sm:text-base text-sm">
              Total Students
            </h3>
            <p className="font-extrabold text-primaryColor sm:text-3xl text-2xl">
              {dashboardStats?.students ? dashboardStats?.students : 0}
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-primaryColor/20 flex items-center p-4 rounded-lg">
          <div className="icon sm:w-16 w-12 sm:h-16 h-12 bg-primaryColor/15 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill="currentColor"
              className="w-6 h-6 text-primaryColor transition duration-75 dark:text-primaryColor"
            >
              <path d="M208 352c-2.4 0-4.8 .4-7.1 1.1C188 357.3 174.4 360 160 360c-14.4 0-28-2.7-41-6.9-2.3-.7-4.7-1.1-7.1-1.1C49.9 352-.3 402.5 0 464.6 .1 490.9 21.7 512 48 512h224c26.3 0 47.9-21.1 48-47.4 .3-62.1-49.9-112.6-112-112.6zm-48-32c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zM592 0H208c-26.5 0-48 22.3-48 49.6V96c23.4 0 45.1 6.8 64 17.8V64h352v288h-64v-64H384v64h-76.2c19.1 16.7 33.1 38.7 39.7 64H592c26.5 0 48-22.3 48-49.6V49.6C640 22.3 618.5 0 592 0z" />
            </svg>
          </div>
          <div className="border-l-2 border-primaryColor/5 pl-4 ml-4">
            <h3 className="font-semibold sm:text-base text-sm">
              Total Teachers
            </h3>
            <p className="font-extrabold text-primaryColor sm:text-3xl text-2xl">
              {dashboardStats?.teachers ? dashboardStats?.teachers : 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
