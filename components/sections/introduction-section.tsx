import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAngular,
} from "react-icons/fa";

const IntroductionSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 items-center md:flex-row h-screen dark:bg-[#2b2c2e] bg-gray-100 p-8">
      {/* Left Column - Image */}
      <div className="flex order-last basis-2/3 xl:basis-1/2 xl:order-first items-center justify-center h-full w-full mb-8 md:mb-0">
        {/* <iframe
          src="https://my.spline.design/scrollbasedinteracvtivemacbookpro-768976bf34fc2644ee86e2b83f9f8628/"
          frameBorder="0"
          width="100%"
          className="h-[120%] lg:h-[140%] xl:h-[70%]"
          style={{ cursor: "auto" }}
        ></iframe> */}
        <iframe
          src="https://my.spline.design/digitalpass-70f88a769b765a0720734dfa0956bec4/"
          frameBorder="0"
          width="100%"
          className="h-[120%] lg:h-[140%] xl:h-full"
          style={{ cursor: "auto" }}
        ></iframe>
      </div>

      {/* Right Column - Technologies */}
      <div className="flex flex-col transition duration-200 items-center basis-1/3 xl:basis-1/2 justify-center xl:h-1/3 w-full text-center">
      
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hello, I&apos;m{" "}
          <span className="text-3xl md:text-5xl font-extrabold text-[#e23237]">
            Adam
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          I&apos;m a{" "}
          <span className="font-bold text-[#e23237]">Front End Developer</span>{" "}
          with <span className="font-bold text-green-600">4+ years</span> of{" "}
          <span className="font-bold text-yellow-500">experience</span>. I have a
          passion for web design and love to create for web and mobile devices.
          I have a strong understanding of {" "}
          <span className="font-bold text-orange-600">HTML</span>,{" "}
          <span className="font-bold text-blue-600">CSS</span>,{" "}
          <span className="font-bold text-yellow-500">JavaScript</span>,{" "}
          <span className="font-bold text-blue-600">React</span>,{" "}
          <span className="font-bold text-[#ea580d]">Typescript</span>, and{" "}
          <span className="font-bold text-[#e23237]">Angular</span>. I'm always
          looking to learn new technologies and improve my skills.
        </p>
        <p className="text-xl md:text-2xl my-8 font-bold">
          Here are some technologies I work with:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <FaAngular className="text-[#e23237] text-6xl" />
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
