import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { StudentContext } from "../../../../contexts/StudentContext";

const TeacherStudentDetailPage = () => {
    const { id } = useParams();

    const { getSingleStudent, singleStudent } = useContext(StudentContext);

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
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-7 gap-y-3">
                    <div className="space-y-1">
                        <p className="text-primaryColor font-semibold sm:text-lg text-base">
                            First Name
                        </p>
                        <h3 className="sm:text-base text-sm font-normal">{singleStudent?.first_name}</h3>
                    </div>
                    <div className="space-y-1">
                        <p className="text-primaryColor font-semibold sm:text-lg text-base">
                            Last Name
                        </p>
                        <h3 className="sm:text-base text-sm font-normal">{singleStudent?.last_name}</h3>
                    </div>
                    <div className="space-y-1">
                        <p className="text-primaryColor font-semibold sm:text-lg text-base">
                            Email
                        </p>
                        <h3 className="sm:text-base text-sm font-normal break-words">{singleStudent?.email}</h3>
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
            </div>
        </div>
    );

}

export default TeacherStudentDetailPage;