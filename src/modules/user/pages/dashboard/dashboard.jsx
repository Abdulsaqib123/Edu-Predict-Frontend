import React, { useContext, useEffect } from "react";
import { SummaryContext } from "../../../../contexts/SummaryContext";

const DashboardPage = () => {
  const { getDataIngestionSummary, dataIngestionSummary } =
    useContext(SummaryContext);

  useEffect(() => {
    getDataIngestionSummary();
  }, []);

  return (
    <div className="pb-40">
      <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg mb-6">
        Data Ingestion
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7">
        <div className="bg-white shadow-lg shadow-primaryColor/20 flex items-center p-4 rounded-lg">
          <div className="icon sm:w-16 w-12 sm:h-16 h-12 bg-primaryColor/15 flex items-center justify-center rounded-full">
            <img
              src="/assets/images/records-icon.png"
              className="sm:w-8 w-6 sm:h-8 h-6"
            />
          </div>
          <div className="border-l-2 border-primaryColor/5 pl-4 ml-4">
            <h3 className="font-semibold sm:text-base text-sm">
              Total Records
            </h3>
            <p className="font-extrabold text-primaryColor sm:text-3xl text-2xl">
              {dataIngestionSummary?.total_records
                ? dataIngestionSummary?.total_records
                : 0}
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-primaryColor/20 flex items-center p-4 rounded-lg">
          <div className="icon sm:w-16 w-12 sm:h-16 h-12 bg-primaryColor/15 flex items-center justify-center rounded-full">
            <img
              src="/assets/images/students-icon.png"
              className="sm:w-8 w-6 sm:h-8 h-6"
            />
          </div>
          <div className="border-l-2 border-primaryColor/5 pl-4 ml-4">
            <h3 className="font-semibold sm:text-base text-sm">
              Total Students
            </h3>
            <p className="font-extrabold text-primaryColor sm:text-3xl text-2xl">
              {dataIngestionSummary?.total_students
                ? dataIngestionSummary?.total_students
                : 0}
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-primaryColor/20 flex items-center p-4 rounded-lg">
          <div className="icon sm:w-16 w-12 sm:h-16 h-12 bg-primaryColor/15 flex items-center justify-center rounded-full">
            <img
              src="/assets/images/attendance-icon.png"
              className="sm:w-8 w-6 sm:h-8 h-6"
            />
          </div>
          <div className="border-l-2 border-primaryColor/5 pl-4 ml-4">
            <h3 className="font-semibold sm:text-base text-sm">
              Total Attendance
            </h3>
            <p className="font-extrabold text-primaryColor sm:text-3xl text-2xl">
              {dataIngestionSummary?.total_attendance
                ? dataIngestionSummary?.total_attendance
                : 0}
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-primaryColor/20 flex items-center p-4 rounded-lg">
          <div className="icon sm:w-16 w-12 sm:h-16 h-12 bg-primaryColor/15 flex items-center justify-center rounded-full">
            <img
              src="/assets/images/demographics-icon.png"
              className="sm:w-8 w-6 sm:h-8 h-6"
            />
          </div>
          <div className="border-l-2 border-primaryColor/5 pl-4 ml-4">
            <h3 className="font-semibold sm:text-base text-sm">
              Total Demographics
            </h3>
            <p className="font-extrabold text-primaryColor sm:text-3xl text-2xl">
              {dataIngestionSummary?.total_demographics
                ? dataIngestionSummary?.total_demographics
                : 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
