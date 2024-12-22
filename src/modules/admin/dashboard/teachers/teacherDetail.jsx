import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";
import dateFormat from "dateformat";

const AdminTeacherDetailPage = () => {
  const { id } = useParams();

  const { getSingleUser, singleUser } = useContext(UserContext);

  useEffect(() => {
    getSingleUser(id);
  }, []);

  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-20">
        <div>
          <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg">
            Teacher Detail
          </h1>
        </div>
      </div>
      <div className="bg-white w-full shadow-lg sm:p-9 p-6 rounded-lg">
        <div className="grid grid-cols-4 gap-10">
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold text-lg">
              First Name
            </p>
            <h3 className="text-base font-normal">{singleUser?.first_name}</h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold text-lg">Last Name</p>
            <h3 className="text-base font-normal">{singleUser?.last_name}</h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold text-lg">Email</p>
            <h3 className="text-base font-normal">{singleUser?.email}</h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold text-lg">
              Created At
            </p>
            <h3 className="text-base font-normal">
              {dateFormat(singleUser?.created_at, "yyyy mmmm d")}
            </h3>
          </div>
          <div className="space-y-1">
            <p className="text-primaryColor font-semibold text-lg">
              Updated At
            </p>
            <h3 className="text-base font-normal">
              {dateFormat(singleUser?.updated_at, "yyyy mmmm d")}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTeacherDetailPage;
