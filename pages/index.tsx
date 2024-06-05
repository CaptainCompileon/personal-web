/* eslint-disable react/jsx-key */
import {
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import LightSwitch from "@/components/ligh-switch/light-switch";
import MotionCursor from "@/components/motion-cursor";
import IntroductionSection from "@/components/sections/introduction-section";
import SocialIcon from "@/components/social-icon";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader";
import Image from "next/image";
import profilePic from "../public/cv.png";
import ExperienceSection from "@/components/sections/experience-section";
import EducationSection from "@/components/sections/education-section";
import ProjectsSection from "@/components/sections/projects-section";
import Footer from "@/components/footer";

export default function Home() {
  // console.log(MyPDF)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const stickyElement = useRef(null);

  const [darkMode, setDarkMode] = React.useState(false);
  const [showCursor, setShowCursor] = useState(false);

  const targetElementRef = useRef(null);
  const otherElementRef = useRef(null);

  useEffect(() => {
    if (targetElementRef.current && otherElementRef.current) {
      const targetHeight = targetElementRef.current.clientHeight;
      otherElementRef.current.style.height = `${targetHeight}px`;
    }
  }, [targetElementRef, otherElementRef]); // Update on ref changes

  return (
    <main className={darkMode ? "dark bg-gray-700 text-white" : "bg-white"}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div
        ref={targetElementRef}
        className="w-full min-h-screen bg-cover bg-center relative mb-4"
      >
        {/* <iframe src='https://my.spline.design/infinityblubscopy-85ff1657b94d167ceaff8df5b80dd006/' className="w-full md:w-3/5  h-screen bg-cover bg-center absolute z-1"></iframe> */}
        <iframe
          ref={otherElementRef}
          src="https://my.spline.design/gradientwaves-39d7e126a4da36e196ee400558b0d644/"
          className="w-full h-screen bg-cover bg-center absolute z-1"
        ></iframe>
        {/* <iframe src='https://my.spline.design/light-d3501e273d770cdcb66a280113e41049/' className="w-full h-screen bg-cover bg-center absolute z-1"></iframe> */}
        {false && showCursor && <MotionCursor stickyElement={stickyElement} />}
        <section
          className="min-h-screen px-10 md:px-20 lg:px-40 relative mx-auto my-auto "
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
        >
          <nav className="py-6 mb-4 flex justify-between">
            <span className="text-xl inline-block align-bottom font-burtons">
              developedbyadam
            </span>
            <ul className="flex items-center z-10">
              <li>
                <LightSwitch
                  classes="cursor-pointer pb-2"
                  onClickFn={() => setDarkMode(!darkMode)}
                ></LightSwitch>
              </li>
            </ul>
          </nav>
          {/* <iframe src='https://my.spline.design/loopingstaircaseportal-0df7fdb3c731051b157a2840ef34c790/' className="w-full h-screen bg-cover bg-center absolute z-1"></iframe> */}
          <div className="bg-white bg-opacity-10 rounded-lg shadow-lg hover:shadow-xl p-6">
            <div className="text-center md:p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md: 6-xl">
                Adam Samko
              </h2>
              <h3 className="text-2xl py-2">FE Developer</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
                I&apos;m a Front End Developer with 4+ years of experience. I
                have a passion for web design and love to create for web and
                mobile devices. I have a strong understanding of HTML, CSS,
                JavaScript, Typescript, and Angular. I&apos;m always looking to
                learn new technologies and improve my skills.
              </p>
            </div>
            <div className=" text-3xl md:text-5xl flex justify-center gap-8 md:gap-16 py-3 text-[#e23237] z-10 dark:text-[#e23237]">
              <SocialIcon link="https://linkedin.com">
                <AiFillLinkedin color="#000" />
              </SocialIcon>

              <a href="/cv.png" download>
                <Image src={profilePic} alt="Download Icon" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full min-h-screen bg-cover bg-center relative">
        <IntroductionSection />
      </div>
      <div className="w-full min-h-screen bg-cover bg-center relative">
        <ExperienceSection />
      </div>
      <div className="w-full min-h-screen bg-cover bg-center relative">
        <EducationSection />
      </div>
      <div className="w-full min-h-screen bg-cover bg-center relative">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
