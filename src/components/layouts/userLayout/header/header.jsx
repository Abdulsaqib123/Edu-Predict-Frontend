import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UserHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigation]);

  return (
    <header className="bg-primaryColor md:py-5 py-4 px-5 absolute top-0 w-full">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link to={"/"} className="block md:w-32 w-24">
              <img
                src="/assets/images/brands/logo-light.png"
                alt="Logo"
                className="w-full h-full"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-x-9">
            <ul className="flex items-center">
              <li>
                <Link
                  to={"/"}
                  className="text-white font-medium text-base hover:text-secondaryColor transition-all mr-6"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  className="text-white font-medium text-base hover:text-secondaryColor transition-all mr-6"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="text-white font-medium text-base hover:text-secondaryColor transition-all mr-6"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact-us"}
                  className="text-white font-medium text-base hover:text-secondaryColor transition-all"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <Link
              to={
                !role
                  ? "/login"
                  : role == "67587c8e74cea1767a2e0581"
                  ? "/admin/dashboard"
                  : role == "67587c8e74cea1767a2e0582"
                  ? "/teacher/dashboard"
                  : "/dashboard"
              }
              className="bg-secondaryColor font-bold text-base rounded-[50px] py-2 px-5 uppercase"
            >
              {!role ? "Login Now" : "Go To Dashboard"}
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden mt-4 bg-primaryColor rounded-lg transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-start gap-2 md:px-5 py-3">
            <li>
              <Link
                to={"/"}
                className="text-white font-medium text-sm hover:text-secondaryColor transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about-us"}
                className="text-white font-medium text-sm hover:text-secondaryColor transition-all"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={"/blogs"}
                className="text-white font-medium text-sm hover:text-secondaryColor transition-all"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="text-white font-medium text-sm hover:text-secondaryColor transition-all"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={"/contact-us"}
                className="text-white font-medium text-sm hover:text-secondaryColor transition-all mb-3 inline-block"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="bg-secondaryColor text-black font-semibold text-sm rounded-[50px] py-2 px-5 uppercase"
              >
                Login Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
