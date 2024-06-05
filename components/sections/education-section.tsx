import React from "react";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 py-16"
    >
      <h2 className="text-5xl font-bold mb-12">Education</h2>
      <div className="max-w-6xl w-full px-6">
        <div className="space-y-12">

          {/* Education Item */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:-translate-y-2">
            <h3 className="text-3xl font-semibold">Master&apos;s Degree</h3>
            <p className="text-lg mt-2">Slovak University of Technology in Bratislava, Bratislava</p>
            <p className="text-gray-200 mt-2">April 2021 - June 2023</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:-translate-y-2">
            <h3 className="text-3xl font-semibold">Master&apos;s Degree (Exchange)</h3>
            <p className="text-lg mt-2">Technical University of Munich, Munich</p>
            <p className="text-gray-200 mt-2">November 2020 - April 2021</p>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:-translate-y-2">
            <h3 className="text-3xl font-semibold">Bachelor&apos;s Degree</h3>
            <p className="text-lg mt-2">Slovak University of Technology in Bratislava, Bratislava</p>
            <p className="text-gray-200 mt-2">September 2016 - July 2020</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
