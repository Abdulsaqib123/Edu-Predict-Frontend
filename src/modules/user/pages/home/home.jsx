import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, Brain, Globe2, LineChart } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <div className="md:pt-64 sm:pt-52 pt-36 bg-secondarySecondColor md:pb-64 pb-52 px-5">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-center uppercase font-semibold sm:text-xl text-sm tracking-widest sm:mb-3 mb-2">
                Improve <span className="text-primaryColor">Your</span> Skills
              </h1>
              <h2 className="text-center text-black font-bold md:text-7xl sm:text-5xl text-3xl md:leading-[84px] sm:leading-[52px] leading-[40px] mx-auto sm:mb-4 mb-3">
                Improve Your Skills With{" "}
                <span className="text-primaryColor">Prediction</span>
              </h2>
              <p className="text-gray-800 sm:text-base text-sm mx-auto max-w-2xl font-normal sm:mb-9 mb-5">
                Explore insights and trends with our advanced analytics
                platform. Make data-driven decisions to create a
                sustainable future.
              </p>
              <div className="btns sm:flex items-center gap-x-5 sm:gap-y-0 justify-center">
                <Link
                  to={"/login"}
                  className="uppercase inline-block bg-primaryColor text-white font-semibold sm:text-base text-sm sm:py-4 py-3 px-9 rounded-[50px] transition-all hover:bg-transparent border-2 border-primaryColor hover:text-primaryColor sm:w-auto w-full sm:mb-auto mb-3"
                >
                  Start improve your skill
                </Link>
                <Link
                  to={"/about-us"}
                  className="uppercase inline-block bg-black text-white font-semibold sm:text-base text-sm sm:py-4 py-3 px-9 rounded-[50px] transition-all hover:bg-transparent hover:text-black border-2 border-black sm:w-auto w-full"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="bg-gray-100 py-[80px] px-6">
        <div className="max-w-7xl w-full mx-auto">
          <div class="max-w-7xl mx-auto text-center mb-14">
            <h2 class="text-4xl font-bold text-gray-800">
              Advanced Features for Education Analysis
            </h2>
            <p class="text-lg text-gray-600 mt-4">
              Our platform provides powerful tools to analyze and understand
              Education data.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primaryColor w-14 h-14 flex items-center justify-center rounded-md mb-4">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Real-Time Monitoring
              </h3>
              <p class="text-gray-600">
                Track Education metrics in real-time with our advanced
                monitoring system.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primaryColor w-14 h-14 flex items-center justify-center rounded-md mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Data Visualization
              </h3>
              <p class="text-gray-600">
                Transform complex data into clear, actionable insights with
                interactive charts.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primaryColor w-14 h-14 flex items-center justify-center rounded-md mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Predictive Analytics
              </h3>
              <p class="text-gray-600">
                Leverage AI to forecast Education trends and identify patterns.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primaryColor w-14 h-14 flex items-center justify-center rounded-md mb-4">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Global Coverage
              </h3>
              <p class="text-gray-600">
                Access Education data from stations worldwide for comprehensive
                analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
