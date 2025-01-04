const AboutUsPage = () => {
  return (
    <>
      <div className="md:pt-44 sm:pt-44 pt-36 bg-gray-100 md:pb-36 pb-28 px-5">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-center text-black font-bold md:text-7xl sm:text-5xl text-3xl md:leading-[84px] sm:leading-[52px] leading-[40px] mx-auto sm:mb-4 mb-3">
                About Us
              </h2>
              <p className="text-gray-800 sm:text-base text-sm mx-auto max-w-2xl font-normal sm:mb-9 mb-5">
                Learn more about our mission and vision.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We aim to provide the most reliable and accessible Education data
              to empower decision-making, increase awareness, and drive
              sustainable change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Innovation
              </h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our team of data scientists and engineers are constantly
                improving our tools to provide the best solutions for Education
                analysis.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Transparency
              </h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We believe in open access to Education data and aim to make our
                platform as user-friendly and transparent as possible.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Sustainability
              </h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Sustainability is at the heart of everything we do. By providing
                data-driven insights, we help organizations and individuals make
                informed, sustainable decisions.
              </p>
            </div>
          </div>
        </div>
              
      </section>
    </>
  );
};

export default AboutUsPage;
