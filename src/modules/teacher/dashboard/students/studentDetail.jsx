import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { StudentContext } from "../../../../contexts/StudentContext";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { LinearProgress } from "@mui/material";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const TeacherStudentDetailPage = () => {
  const { id } = useParams();

  const {
    getSingleStudent,
    singleStudent,
    gradesData,
    modulesProgress,
    attendanceProgress,
  } = useContext(StudentContext);

  useEffect(() => {
    getSingleStudent(id);
  }, []);

  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg">
            Student Detail
          </h1>
        </div>
      </div>
      <div className="bg-white w-full shadow-lg sm:p-9 p-6 rounded-lg">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-7 gap-y-7 border-b-[2px] border-gray-200 pb-6 mb-6">
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              Student ID
            </p>
            <h3 className="sm:text-base text-sm font-normal">
              {singleStudent?._id}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              First Name
            </p>
            <h3 className="sm:text-base text-sm font-normal">
              {singleStudent?.first_name}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              Last Name
            </p>
            <h3 className="sm:text-base text-sm font-normal">
              {singleStudent?.last_name}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              Email
            </p>
            <h3 className="sm:text-base text-sm font-normal break-words">
              {singleStudent?.email}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              Age
            </p>
            <h3 className="sm:text-base text-sm font-normal break-words">
              {singleStudent?.age}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              Gender
            </p>
            <h3 className="sm:text-base text-sm font-normal break-words">
              {singleStudent?.gender}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              Created At
            </p>
            <h3 className="sm:text-base text-sm font-normal">
              {dateFormat(singleStudent?.created_at, "yyyy mmmm d")}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              Updated At
            </p>
            <h3 className="sm:text-base text-sm font-normal">
              {dateFormat(singleStudent?.updated_at, "yyyy mmmm d")}
            </h3>
          </div>
        </div>
        <h2 className="text-black font-semibold md:text-2xl text-lg sm:mb-8 mb-4">
          Educational Data
        </h2>
        <div className="flex items-stretch justify-between flex-wrap">
          <div className="space-y-5 md:w-[49%] md:mb-0 mb-6 w-full bg-gray-100/55 p-7 rounded-xl">
            <h3 className="text-primaryColor font-semibold sm:text-xl">
              Marks
            </h3>
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
          <div className="space-y-5 md:w-[49%] w-full bg-gray-100/55 p-7 rounded-xl">
            <h3 className="text-primaryColor font-semibold sm:text-xl">
              LMS Progress
            </h3>
            {modulesProgress == "" && (
              <p className="text-center">No lms progress!</p>
            )}
            {modulesProgress.map((module, index) => (
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="text-gray-700 sm:text-base text-sm">
                    {module.module}
                  </h6>
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
          <div className="space-y-5 w-[100%] bg-gray-100/55 p-7 rounded-xl mt-6">
            <h3 className="text-primaryColor font-semibold sm:text-xl">
              Attendance Progress
            </h3>
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
                      <td className="px-6 py-4 text-black">
                        {subject?.subject}
                      </td>
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
    </div>
  );
};

export default TeacherStudentDetailPage;
