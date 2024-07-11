import React from "react";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-200 text-gray-800 py-16"
    >
      {/* <iframe
          src="https://my.spline.design/scrollbasedinteracvtivemacbookpro-768976bf34fc2644ee86e2b83f9f8628/"
          className="bg-center w-[50%] h-[35%]"
        ></iframe> */}
      <h2 className="text-5xl font-bold mb-12">Experience</h2>
      <div className="max-w-6xl w-full px-6">
        <div className="space-y-12">
          <div className="bg-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Company Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold">
                  Frontend Engineer at Bloomreach
                </h3>
                <p className="text-gray-600">June 2022 - March 2024</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>
                Specialized in Angular to develop user interfaces for
                enterprise-level applications.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver scalable
                frontend solutions.
              </li>
              <li>
                Ensured code quality through unit, integration, and end-to-end
                testing.
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Company Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold">
                  Frontend Developer at Alfabase s.r.o
                </h3>
                <p className="text-gray-600">July 2021 - June 2022</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>
                Utilized Angular for frontend development in governmental
                projects.
              </li>
              <li>
                Developed a UI element library adhering to design standards.
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Company Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold">
                  Software Developer at Siemens Healthineers
                </h3>
                <p className="text-gray-600">October 2019 - September 2020</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Contributed to the development of syngo Virtual Cockpit.</li>
              <li>
                Maintained UI test framework using Appium in .NET environment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
