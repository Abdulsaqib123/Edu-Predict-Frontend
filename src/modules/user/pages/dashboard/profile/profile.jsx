import { validate } from "email-validator";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../../../../../contexts/StudentContext";
import { UserContext } from "../../../../../contexts/UserContext";

const StudentProfilePage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const user_id = localStorage.getItem("user_id");
  const { getSingleUser, singleUser, updateProfile, loading } =
    useContext(UserContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (user_id) {
      getSingleUser(user_id);
    }
  }, []);

  useEffect(() => {
    if (singleUser) {
      setFormData({
        first_name: singleUser?.first_name,
        last_name: singleUser?.last_name,
        age: singleUser?.age,
        gender: singleUser?.gender,
        email: singleUser?.email,
      });
    }
  }, [singleUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let errors = { ...formErrors };

    switch (name) {
      case "first_name":
        if (!value.trim()) {
          errors.first_name = "Please input student first name!";
        } else {
          delete errors.first_name;
        }
        break;
      case "last_name":
        if (!value.trim()) {
          errors.last_name = "Please input student last name!";
        } else {
          delete errors.last_name;
        }
        break;
      case "age":
        if (!value.trim()) {
          errors.age = "Please input student age!";
        } else {
          delete errors.age;
        }
        break;
      case "gender":
        if (!value.trim()) {
          errors.gender = "Please input student gender!";
        } else {
          delete errors.gender;
        }
        break;
      case "email":
        if (!value.trim()) {
          errors.email = "Please input student email!";
        } else if (!validate(value)) {
          errors.email = "Please input student valid email address!";
        } else {
          delete errors.email;
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleFormValidation = (data, name = null) => {
    const errors = {};

    if (!data.first_name) {
      errors.first_name = "Please input student first name!";
    }

    if (!data.last_name) {
      errors.last_name = "Please input student last name!";
    }

    if (!data.age) {
      errors.age = "Please input student age!";
    }

    if (!data.gender) {
      errors.gender = "Please input student gender!";
    }

    if (!data.email) {
      errors.email = "Please input student email!";
    } else if (!validate(data.email)) {
      errors.email = "Please input student valid email address!";
    }

    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = handleFormValidation(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      let tempData = {
        role: "67587c8e74cea1767a2e0583",
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        age: formData.age,
        gender: formData.gender,
      };

      await updateProfile(user_id, tempData);

      navigation("/dashboard");
    }
  };

  return (
    <div className="pb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg">
            Your Profile
          </h1>
        </div>
      </div>
      <div className="bg-white w-full shadow-lg sm:p-9 p-6 rounded-lg">
        <form onSubmit={handleFormSubmit} method="POST" className="mb-8">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-7">
            <div className="form-group sm:col-span-1 col-span-2">
              <label
                for="first_name"
                className="text-black font-normal sm:text-base text-sm sm:mb-2 mb-1 inline-block"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="w-full border-[1px] border-white rounded-md placeholder:text-primaryColor text-black bg-white shadow-md text-sm py-3 px-4 focus:border-primaryColor outline-none"
                placeholder="First Name..."
                onChange={handleInputChange}
                value={formData.first_name}
              />
              {formErrors.first_name && (
                <span className="text-red-600 text-sm mt-1 inline-block">
                  {formErrors.first_name}
                </span>
              )}
            </div>
            <div className="form-group sm:col-span-1 col-span-2">
              <label
                for="last_name"
                className="text-black font-normal sm:text-base text-sm sm:mb-2 mb-1 inline-block"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="w-full border-[1px] border-white rounded-md placeholder:text-primaryColor text-black bg-white shadow-md text-sm py-3 px-4 focus:border-primaryColor outline-none"
                placeholder="Last Name..."
                onChange={handleInputChange}
                value={formData.last_name}
              />
              {formErrors.last_name && (
                <span className="text-red-600 text-sm mt-1 inline-block">
                  {formErrors.last_name}
                </span>
              )}
            </div>
            <div className="form-group sm:col-span-1 col-span-2">
              <label
                for="age"
                className="text-black font-normal sm:text-base text-sm sm:mb-2 mb-1 inline-block"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="w-full border-[1px] border-white rounded-md placeholder:text-primaryColor text-black bg-white shadow-md text-sm py-3 px-4 focus:border-primaryColor outline-none"
                placeholder="Age..."
                onChange={handleInputChange}
                value={formData.age}
              />
              {formErrors.age && (
                <span className="text-red-600 text-sm mt-1 inline-block">
                  {formErrors.age}
                </span>
              )}
            </div>
            <div className="form-group sm:col-span-1 col-span-2">
              <label
                for="gender"
                className="text-black font-normal sm:text-base text-sm sm:mb-2 mb-1 inline-block"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full border-[1px] border-white text-primaryColor rounded-md placeholder:text-primaryColor text-black bg-white shadow-md text-sm py-3 px-4 focus:border-primaryColor outline-none"
                onChange={handleInputChange}
                value={formData.gender}
              >
                <option value={""}>Select Gender</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
              {formErrors.gender && (
                <span className="text-red-600 text-sm mt-1 inline-block">
                  {formErrors.gender}
                </span>
              )}
            </div>
            <div className="form-group col-span-2">
              <label
                for="email"
                className="text-black font-normal sm:text-base text-sm sm:mb-2 mb-1 inline-block"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full border-[1px] border-white rounded-md placeholder:text-primaryColor text-black bg-white shadow-md text-sm py-3 px-4 focus:border-primaryColor outline-none"
                placeholder="Valid Email Address..."
                onChange={handleInputChange}
                value={formData.email}
              />
              {formErrors.email && (
                <span className="text-red-600 text-sm mt-1 inline-block">
                  {formErrors.email}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-primaryColor hover:bg-primaryColor focus:ring-4 focus:outline-none focus:ring-primaryColor font-medium rounded-lg sm:text-base text-xs px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green dark:hover:bg-green dark:focus:ring-primaryColor mt-8"
          >
            {!loading && "Update Profile"}
            {loading && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 group-hover:text-white fill-primaryColor"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            )}
          </button>
        </form>
        <h2 className="text-black font-semibold md:text-2xl sm:text-xl text-lg">
          Teacher Profile
        </h2>
        <div className="w-full h-[2px] bg-primaryColor/20 mt-3 mb-7"></div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7">
          <div className="bg-white shadow-lg shadow-primaryColor/20 p-4 rounded-lg">
            <h3 className="font-semibold sm:text-base text-sm">Username</h3>
            <p className="font-extrabold text-primaryColor sm:text-2xl text-xl">
              {singleUser?.teacher?.username}
            </p>
          </div>
          <div className="bg-white shadow-lg shadow-primaryColor/20 p-4 rounded-lg">
            <h3 className="font-semibold sm:text-base text-sm">Email</h3>
            <p className="font-extrabold text-primaryColor sm:text-2xl text-xl">
              {singleUser?.teacher?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;
