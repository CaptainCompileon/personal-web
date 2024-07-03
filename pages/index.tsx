/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from "react";
import MotionCursor from "@/components/motion-cursor";
import IntroductionSection from "@/components/sections/introduction-section";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader";
import ExperienceSection from "@/components/sections/experience-section";
import EducationSection from "@/components/sections/education-section";
import ProjectsSection from "@/components/sections/projects-section";
import Footer from "@/components/footer";
import Header from "@/components/curved-menu/header";
import AboutSection from "@/components/sections/about-section";

export default function Home() {
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
        className="w-full min-h-screen bg-cover bg-center relative"
      >
        <div className=" dark:bg-[#2b2c2e] bg-gray-100 w-full min-h-screen bg-cover bg-center relative">
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />

          <IntroductionSection />
        </div>
        {/* <iframe src='https://my.spline.design/infinityblubscopy-85ff1657b94d167ceaff8df5b80dd006/' className="w-full md:w-3/5  h-screen bg-cover bg-center absolute z-1"></iframe> */}
        <iframe
          ref={otherElementRef}
          src="https://my.spline.design/gradientwaves-39d7e126a4da36e196ee400558b0d644/"
          className="w-full h-screen bg-cover bg-center absolute z-1"
        ></iframe>
        {/* <iframe src='https://my.spline.design/light-d3501e273d770cdcb66a280113e41049/' className="w-full h-screen bg-cover bg-center absolute z-1"></iframe> */}
        {false && showCursor && <MotionCursor stickyElement={stickyElement} />}
        {/* <AboutSection setShowCursor={setShowCursor}/> */}
      </div>

      <div id="experience" className="w-full min-h-screen bg-cover bg-center relative">
        <ExperienceSection  />
      </div>
      <div id="education" className="w-full min-h-screen bg-cover bg-center relative">
        <EducationSection />
      </div>
      <div id="projects" className="w-full min-h-screen bg-cover bg-center relative">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
