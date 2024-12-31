import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../../../../contexts/StudentContext";

const TeacherStudentsListPage = () => {
  const { getStudentsList, studentsList, loading, deleteStudent } =
    useContext(StudentContext);

  useEffect(() => {
    getStudentsList();
  }, []);

  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-20">
        <div>
          <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg">
            Students
          </h1>
        </div>
        <div className="text-right">
          <Link
            to={"/teacher/students/add"}
            className="text-white bg-primaryColor hover:bg-primaryColor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-primaryColor dark:hover:bg-primaryColor dark:focus:ring-primaryColor"
          >
            <svg
              class="w-[24px] h-[24px] text-white mr-2 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14m-7 7V5"
              />
            </svg>
            Add Student
          </Link>
        </div>
      </div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-primaryColor dark:text-white">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                USERNAME
              </th>
              <th scope="col" class="px-6 py-3">
                EMAIL
              </th>
              <th scope="col" class="px-6 py-3">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black text-center"
                >
                  Loading...
                </td>
              </tr>
            )}
            {studentsList != "" && !loading && (
              <>
                {studentsList?.map((student, index) => (
                  <tr
                    class="bg-white border-b dark:bg-white dark:border-primaryColor"
                    key={index}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
                    >
                      {index + 1}
                    </th>
                    <td class="px-6 py-4 text-black">
                      {student?.first_name} {student?.last_name}
                    </td>
                    <td class="px-6 py-4 text-black">{student?.email}</td>
                    <td>
                      <span>
                        <Link
                          to={`/teacher/students/${student?._id}`}
                          className="text-white bg-blue-600 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green dark:hover:bg-green dark:focus:ring-primaryColor"
                        >
                          View Student
                        </Link>
                        <Link
                          to={`/teacher/students/edit/${student?._id}`}
                          className="text-white bg-green-800 hover:bg-green focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green dark:hover:bg-green dark:focus:ring-primaryColor"
                        >
                          Update Student
                        </Link>
                        <button
                          type="button"
                          className="text-white bg-red-800 hover:bg-green focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green dark:hover:bg-green dark:focus:ring-primaryColor"
                          onClick={async () => {
                            await deleteStudent(student?._id);
                          }}
                        >
                          Delete Student
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </>
            )}
            {studentsList == "" && !loading && (
              <tr className="bg-white border-b dark:bg-white dark:border-primaryColor">
                <td
                  colSpan={3}
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black text-center"
                >
                  No Students Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherStudentsListPage;
