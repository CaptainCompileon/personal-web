import React from "react";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 py-16"
    >
      <h2 className="text-5xl font-bold mb-12">Projects</h2>
      <div className="max-w-6xl w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Item */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600">
                Description of the project, highlighting key features and
                technologies used.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600">
                Description of the project, highlighting key features and
                technologies used.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-600">
                Description of the project, highlighting key features and
                technologies used.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project 4</h3>
              <p className="text-gray-600">
                Description of the project, highlighting key features and
                technologies used.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project 5</h3>
              <p className="text-gray-600">
                Description of the project, highlighting key features and
                technologies used.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project 6</h3>
              <p className="text-gray-600">
                Description of the project, highlighting key features and
                technologies used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
