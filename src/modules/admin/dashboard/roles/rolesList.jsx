import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { RoleContext } from "../../../../contexts/RoleContext";

const AdminRolesListPage = () => {
  const { getRolesList, rolesList, loading, deleteRole } =
    useContext(RoleContext);

  useEffect(() => {
    getRolesList();
  }, []);

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
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-primaryColor dark:text-white rounded-t-lg">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                NAME
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
            {rolesList != "" && !loading && (
              <>
                {rolesList?.map((role, index) => (
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
                    <td class="px-6 py-4 text-black">{role?.name}</td>
                    <td>
                      <span>
                        <Link
                          to={`/admin/roles/edit/${role?._id}`}
                          className="text-white bg-green-800 hover:bg-green focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green dark:hover:bg-green dark:focus:ring-primaryColor"
                        >
                          Update Role
                        </Link>
                        <button
                          type="button"
                          className="text-white bg-red-800 hover:bg-green focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green dark:hover:bg-green dark:focus:ring-primaryColor"
                          onClick={async () => {
                            await deleteRole(role?._id);
                          }}
                        >
                          Delete Role
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </>
            )}

            {rolesList == "" && !loading && (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black text-center"
                >
                  No Roles Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRolesListPage;
