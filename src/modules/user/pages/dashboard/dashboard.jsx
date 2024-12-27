import React, { useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { DashboardContext } from "../../../../contexts/DashboardContext";
import { LinearProgress } from "@mui/material";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const DashboardPage = () => {
  const {
    getStudentDashboardStats,
    gradesData,
    attendanceProgress,
    modulesProgress,
  } = useContext(DashboardContext);

  useEffect(() => {
    getStudentDashboardStats();
  }, []);

  return (
    <div className="pb-40">
      <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg mb-8">
        Student Dashboard
      </h1>
      <div className="grid grid-cols-2 gap-7">
        <div className="bg-white shadow-lg shadow-primaryColor/20 p-4 rounded-lg md:col-span-1 col-span-2">
          <h2 className="text-black font-semibold md:text-2xl sm:text-2xl text-lg mb-6">
            Grades
          </h2>
          <Bar
            data={gradesData && gradesData}
            options={{
              responsive: true,
              scales: {
                x: {
                  ticks: {
                    font: {
                      family: "Poppins",
                    },
                  },
                },
                y: {
                  ticks: {
                    font: {
                      family: "Poppins",
                    },
                  },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    font: {
                      family: "Poppins",
                    },
                  },
                },
                tooltip: {
                  bodyFont: {
                    family: "Poppins",
                  },
                },
              },
            }}
          />
        </div>
        <div className="bg-white shadow-lg shadow-primaryColor/20 p-4 rounded-lg md:col-span-1 col-span-2">
          <h2 className="text-black font-semibold md:text-2xl sm:text-2xl text-lg mb-6">
            LMS Progress
          </h2>
          {modulesProgress == "" && (
            <p className="text-center">No lms progress!</p>
          )}
          {modulesProgress.map((module, index) => (
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <h6 className="text-gray-700">{module.module}</h6>
                <p className="font-bold text-primaryColor">
                  {module?.progress}%
                </p>
              </div>
              <LinearProgress
                variant="determinate"
                value={module?.progress}
                sx={{
                  width: "100%",
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#b7aaf0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#5B3AEE",
                  },
                }}
              />
            </div>
          ))}
        </div>
        <div className="bg-white shadow-lg shadow-primaryColor/20 p-4 rounded-lg col-span-2">
          <h2 className="text-black font-semibold md:text-2xl sm:text-2xl text-lg mb-6">
            Attendance Progress
          </h2>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs uppercase bg-primaryColor text-white">
              <tr>
                <th scope="col" class="px-6 py-3">
                  SUBJECT
                </th>
                <th scope="col" class="px-6 py-3">
                  PROGRESS
                </th>
              </tr>
            </thead>
            <tbody>
              {!attendanceProgress || attendanceProgress.length === 0 ? (
                <tr>
                  <td
                    colSpan={2}
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black text-center"
                  >
                    No attendance progress!
                  </td>
                </tr>
              ) : (
                attendanceProgress?.map((subject, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-black">{subject?.subject}</td>
                    <td className="px-6 py-4 text-black">
                      {subject?.progress}%
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
