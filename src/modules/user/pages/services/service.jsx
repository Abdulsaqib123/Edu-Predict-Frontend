import { BarChart3, Brain, Globe2, LineChart } from "lucide-react";

const ServicesPage = () => {
  return (
    <>
      <div className="md:pt-44 sm:pt-44 pt-36 bg-gray-100 md:pb-36 pb-28 px-5">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-center text-black font-bold md:text-7xl sm:text-5xl text-3xl md:leading-[84px] sm:leading-[52px] leading-[40px] mx-auto sm:mb-4 mb-3">
                Services
              </h2>
              <p className="text-gray-800 sm:text-base text-sm mx-auto max-w-2xl font-normal sm:mb-9 mb-5">
                Learn more about our mission and vision.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section class="py-[80px] px-6">
        <div className="max-w-7xl w-full mx-auto">
          <div class="max-w-7xl mx-auto text-center mb-14">
            <h2 class="text-4xl font-bold text-gray-800">Our Services</h2>
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
      z
    </>
  );
};

export default ServicesPage;
