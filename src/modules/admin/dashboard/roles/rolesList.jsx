import { Link } from "react-router-dom";

const AdminRolesListPage = () => {
  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-20">
        <div>
          <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg">
            User Roles
          </h1>
        </div>
        <div className="text-right">
          <Link
            to={"/admin/roles/add"}
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
            Add Role
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
                NAME
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-white dark:border-primaryColor">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4 text-black">Silver</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRolesListPage;
