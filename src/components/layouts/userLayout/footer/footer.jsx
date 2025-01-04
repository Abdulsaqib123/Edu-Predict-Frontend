import React from "react";
import { Link } from "react-router-dom";

const UserFooter = () => {
  return (
    <footer className="bg-black sm:pt-20 pt-12 pb-6 px-5">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-12 gap-10 border-b-[1px] border-secondaryColor/50 sm:pb-10 pb-8 sm:mb-6 mb-5">
          <div className="w-full">
            <div className="logo sm:mb-6 mb-3">
              <a href="/" className="block md:w-44 sm:w-40 w-32">
                <img
                  src="/assets/images/brands/logo-light.png"
                  alt="Logo"
                  className="w-full h-full"
                />
              </a>
            </div>
            <p className="text-gray-200 sm:text-base text-sm mb-5">
              Empowering climate action through data analytics and AI.
            </p>
            <ul class="space-y-[17px]">
              <li class="flex items-center gap-[8px]">
                <span class="icon">
                  <img src="/assets/images/call-icon-yellow.svg" alt="icon" />
                </span>
                <a
                  href="tel:+923150255543"
                  class="hover:text-secondaryColor transition-all text-white sm:text-base text-sm"
                >
                  +92 315 02 555 43
                </a>
              </li>

              <li class="flex items-center gap-[8px]">
                <span class="icon">
                  <img src="/assets/images/message-yellow.svg" alt="icon" />
                </span>
                <a
                  href="mailto:edutics.support@gmail.com"
                  class="hover:text-secondaryColor transition-all text-white sm:text-base text-sm"
                >
                  edutics.support@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="text-secondaryColor font-semibold sm:text-lg text-base sm:mb-9 mb-4">
              Quick Links
            </h3>
            <ul className="sm:space-y-3 space-y-2">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-200 sm:text-base text-sm transition-all hover:text-secondaryColor"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  className="text-gray-200 sm:text-base text-sm transition-all hover:text-secondaryColor"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="text-gray-200 sm:text-base text-sm transition-all hover:text-secondaryColor"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact-us"}
                  className="text-gray-200 sm:text-base text-sm transition-all hover:text-secondaryColor"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/login"}
                  className="text-gray-200 sm:text-base text-sm transition-all hover:text-secondaryColor"
                >
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="text-secondaryColor font-semibold sm:text-lg text-base sm:mb-9 mb-4">
              Contact Us
            </h3>
            <ul class="space-y-[17px]">
              <li class="flex items-center gap-[8px]">
                <span class="icon">
                  <img src="/assets/images/call-icon-yellow.svg" alt="icon" />
                </span>
                <a
                  href="tel:+923150255543"
                  class="hover:text-secondaryColor transition-all text-white sm:text-base text-sm"
                >
                  +92 315 02 555 43
                </a>
              </li>

              <li class="flex items-center gap-[8px]">
                <span class="icon">
                  <img src="/assets/images/message-yellow.svg" alt="icon" />
                </span>
                <a
                  href="mailto:edutics.support@gmail.com"
                  class="hover:text-secondaryColor transition-all text-white sm:text-base text-sm"
                >
                  edutics.support@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-200 sm:text-base text-sm">
            © All Copyright 2024 by Edutics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
