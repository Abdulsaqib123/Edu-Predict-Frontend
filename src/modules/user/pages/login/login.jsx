import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { validate } from "email-validator";
import { Link, Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const { loading, loginUser } = useContext(AuthContext);
  const router = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let errors = { ...formErrors };

    switch (name) {
      case "email":
        if (!value.trim()) {
          errors.email = "Please input your email!";
        } else if (!validate(value)) {
          errors.email = "Please input your valid email address!";
        } else {
          delete errors.email;
        }
        break;
      case "password":
        if (!value.trim()) {
          errors.password = "Please input your password!";
        } else if (value.length < 8) {
          errors.password =
            "Please input you password character greater than 8!";
        } else if (value.length > 20) {
          errors.password = "Please input you password character less than 20!";
        } else {
          delete errors.password;
        }
        break;

      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleFormValidation = (data, name = null) => {
    const errors = {};

    if (!data.email) {
      errors.email = "Please input your email!";
    } else if (!validate(data.email)) {
      errors.email = "Please input your valid email address!";
    }

    if (!data.password) {
      errors.password = "Please input your password!";
    } else if (data.password.length < 8) {
      errors.password = "Please input you password character greater than 8!";
    } else if (data.password.length > 20) {
      errors.password = "Please input you password character less than 20!";
    }

    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = handleFormValidation(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      let tempData = {
        email: formData.email,
        password: formData.password,
      };
      const user = await loginUser(tempData);

      if (user && user?.role?._id === "67587c8e74cea1767a2e0581") {
        router("/admin/dashboard");
      } else if (user && user?.role?._id === "67587c8e74cea1767a2e0582") {
        router("/teacher/dashboard");
      } else {
        router("/dashboard");
      }
    }
  };

  if (token && role === "67587c8e74cea1767a2e0583") {
    return <Navigate to={"/dashboard"} />;
  }

  if (token && role === "67587c8e74cea1767a2e0581") {
    return <Navigate to={"/admin/dashboard"} />;
  }

  if (token && role === "67587c8e74cea1767a2e0582") {
    return <Navigate to={"/teacher/dashboard"} />;
  }

  return (
    <>
      <Helmet>
        <title>Edutics - Login</title>
      </Helmet>
      <div className="flex items-start justify-center w-full sm:py-56 py-28 pb-20 px-5">
        <div className="max-w-xl bg-white w-full shadow-lg sm:p-9 p-6 rounded-lg">
          <h1 className="text-primaryColor font-bold uppercase sm:text-4xl text-2xl border-b-2 border-primaryColor/55 sm:pb-4 pb-2 sm:mb-6 mb-4">
            Login Now
          </h1>
          <form action="" method="POST" onSubmit={handleFormSubmit}>
            <div className="sm:space-y-8 space-y-4">
              <div className="form-group">
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
                />
                {formErrors.email && (
                  <span className="text-red-600 text-sm mt-1 inline-block">
                    {formErrors.email}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label
                  for="password"
                  className="text-black font-normal sm:text-base text-sm sm:mb-2 mb-1 inline-block"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border-[1px] border-white rounded-md placeholder:text-primaryColor text-black bg-white shadow-md text-sm py-3 px-4 focus:border-primaryColor outline-none"
                  placeholder="********"
                  onChange={handleInputChange}
                />
                {formErrors.password && (
                  <span className="text-red-600 text-sm mt-1 inline-block">
                    {formErrors.password}
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="uppercase flex items-center justify-center bg-black text-white font-semibold sm:text-lg text-sm sm:py-3 py-2 rounded-[50px] transition-all hover:bg-transparent border-2 border-primaryColor hover:text-primaryColor w-full sm:mt-9 mt-6 group"
            >
              {loading && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 group-hover:text-white fill-primaryColor"
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
              {!loading && "Login"}
            </button>
            <p className="text-center text-black sm:text-sm text-xs mt-5">
              Don't have an account?{" "}
              <Link
                to={"/create-account"}
                className="text-primaryColor font-semibold"
              >
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
