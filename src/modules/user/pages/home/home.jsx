import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="md:pt-64 sm:pt-52 pt-36 bg-secondarySecondColor md:pb-64 pb-52 px-5">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-center uppercase font-semibold sm:text-xl text-sm tracking-widest sm:mb-3 mb-2">
              Online <span className="text-primaryColor">Learning</span> Cource
            </h1>
            <h2 className="text-center text-black font-bold md:text-7xl sm:text-5xl text-3xl max-w-2xl md:leading-[84px] sm:leading-[52px] leading-[40px] mx-auto sm:mb-4 mb-3">
              Explore Your Skills With{" "}
              <span className="text-primaryColor">Online</span> Class
            </h2>
            <p className="text-gray-800 sm:text-base text-sm max-w-2xl font-normal sm:mb-9 mb-5">
              Smply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry’s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
            </p>
            <div className="btns sm:flex items-center gap-x-5 sm:gap-y-0 justify-center">
              <Link
                to={""}
                className="uppercase inline-block bg-primaryColor text-white font-semibold sm:text-base text-sm sm:py-4 py-3 px-9 rounded-[50px] transition-all hover:bg-transparent border-2 border-primaryColor hover:text-primaryColor sm:w-auto w-full sm:mb-auto mb-3"
              >
                Start a Cource
              </Link>
              <Link
                to={""}
                className="uppercase inline-block bg-black text-white font-semibold sm:text-base text-sm sm:py-4 py-3 px-9 rounded-[50px] transition-all hover:bg-transparent hover:text-black border-2 border-black sm:w-auto w-full"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
