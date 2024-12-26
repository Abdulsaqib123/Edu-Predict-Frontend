import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { NotificationContext } from "../../../../../contexts/NotificationContext";

const StudentNotificationListPage = () => {
  const { getNotificationsList, notificationsList, loading, markAsRead } =
    useContext(NotificationContext);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    getNotificationsList(`?user_id=${user_id}`);
  }, []);

  const handleMarkAsRead = async (notification_id) => {
    await markAsRead(user_id, notification_id, `?user_id=${user_id}`);
  };

  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-20">
        <div>
          <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg">
            Notifications
          </h1>
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
                MESSAGE
              </th>
              <th scope="col" class="py-3">
                READED
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
            {notificationsList != "" && !loading && (
              <>
                {notificationsList?.map((notification, index) => (
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
                      {notification?.message}
                    </td>
                    <td>
                      {!notification?.read ? (
                        <button
                          type="button"
                          className="text-white bg-green-800 hover:bg-green focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green dark:hover:bg-green dark:focus:ring-primaryColor"
                          onClick={() => handleMarkAsRead(notification?._id)}
                        >
                          Mark as read
                        </button>
                      ) : (
                        <p className="font-medium text-green-600 text-left">
                          Readed
                        </p>
                      )}
                    </td>
                    <td>
                      <span>
                        <Link
                          to={`/dashboard/notifications/${notification?._id}`}
                          className="text-white bg-blue-600 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green dark:hover:bg-green dark:focus:ring-blue-600"
                        >
                          View Detail
                        </Link>
                      </span>
                    </td>
                  </tr>
                ))}
              </>
            )}
            {notificationsList == "" && !loading && (
              <tr className="bg-white border-b dark:bg-white dark:border-primaryColor">
                <td
                  colSpan={3}
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black text-center"
                >
                  No Notifications Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentNotificationListPage;
