import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

const IntroductionSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center md:flex-row h-screen bg-gray-100 p-8">
      {/* Left Column - Image */}
      <div className="flex items-center justify-center h-full w-full mb-8 md:mb-0">
        <iframe
        className=""
          src="https://my.spline.design/digitalpass-70f88a769b765a0720734dfa0956bec4/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ cursor: "auto" }}
        ></iframe>
      </div>

      {/* Right Column - Technologies */}
      <div className="flex flex-col items-center justify-center md:w-2/3 md:h-1/3 w-full text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hello, I'm Your Name
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Here are some technologies I work with:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <FaReact className="text-blue-600 text-6xl" />
          <FaNodeJs className="text-green-600 text-6xl" />
          <FaHtml5 className="text-orange-600 text-6xl" />
          <FaCss3Alt className="text-blue-600 text-6xl" />
          <FaJsSquare className="text-yellow-500 text-6xl" />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
