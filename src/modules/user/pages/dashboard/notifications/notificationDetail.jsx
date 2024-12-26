import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { NotificationContext } from "../../../../../contexts/NotificationContext";

const StudentNotificationDetailPage = () => {
  const { id } = useParams();

  const { getSingleNotification, singleNotification } =
    useContext(NotificationContext);

  useEffect(() => {
    getSingleNotification(id);
  }, []);

  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg">
            Notification Detail
          </h1>
        </div>
      </div>
      <div className="bg-white w-full shadow-lg sm:p-9 p-6 rounded-lg">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-7 gap-y-3 mb-6">
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              Teacher Name
            </p>
            <h3 className="sm:text-base text-sm font-normal">
              {singleNotification?.teacher?.first_name}{" "}
              {singleNotification?.teacher?.last_name}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              Dataset Type
            </p>
            <h3 className="sm:text-base text-sm font-normal">
              {singleNotification?.dataset_type}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold sm:text-lg text-base">
              Readed
            </p>
            <h3 className="sm:text-base text-sm font-normal">
              {singleNotification?.read ? "Readed" : "Not Readed"}
            </h3>
          </div>
        </div>
        <div className="space-y-1 mb-6">
          <p className="text-primaryColor font-semibold sm:text-lg text-base">
            Message
          </p>
          <h3 className="sm:text-base text-sm font-normal">
            {singleNotification?.message}
          </h3>
        </div>
        <div className="space-y-1">
          <p className="text-primaryColor font-semibold sm:text-lg text-base">
            Created At
          </p>
          <h3 className="sm:text-base text-sm font-normal">
            {dateFormat(singleNotification?.created_at, "yyyy mmmm d")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StudentNotificationDetailPage;
