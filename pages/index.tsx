/* eslint-disable react/jsx-key */
import {
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import React, { useRef, useState } from "react";
import LightSwitch from "@/components/ligh-switch/light-switch";
import MotionCursor from "@/components/motion-cursor";
import IntroductionSection from "@/components/introduction-section";
import SocialIcon from "@/components/social-icon";

export default function Home() {
  const stickyElement = useRef(null);

  const [darkMode, setDarkMode] = React.useState(false);
  const [showCursor, setShowCursor] = useState(false);

  return (
    <main className={darkMode ? "dark bg-gray-700 text-white" : "bg-white"}>
      <div className="w-full min-h-screen bg-cover bg-center relative mb-4">
        {/* <iframe src='https://my.spline.design/infinityblubscopy-85ff1657b94d167ceaff8df5b80dd006/' className="w-full md:w-3/5  h-screen bg-cover bg-center absolute z-1"></iframe> */}
        {/* <iframe
          src="https://my.spline.design/gradientwaves-39d7e126a4da36e196ee400558b0d644/"
          className="w-full h-screen bg-cover bg-center absolute z-1"
        ></iframe> */}
        {/* <iframe src='https://my.spline.design/light-d3501e273d770cdcb66a280113e41049/' className="w-full h-screen bg-cover bg-center absolute z-1"></iframe> */}
        {false && showCursor && <MotionCursor stickyElement={stickyElement} />}
        <section
          className="min-h-screen px-10 md:px-20 lg:px-40 relative mx-auto my-auto "
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
        >
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyadam</h1>
            <ul className="flex items-center z-10">
              <li>
                <LightSwitch
                  classes="cursor-pointer"
                  onClickFn={() => setDarkMode(!darkMode)}
                ></LightSwitch>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
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
                JavaScript, Typescript, and Angular. I&apos;m always looking to learn new
                technologies and improve my skills.
              </p>
            </div>
            <div className=" text-3xl md:text-5xl flex justify-center gap-8 md:gap-16 py-3 text-gray-600 z-10 dark:text-teal-600">
              <SocialIcon ref={stickyElement} link="https://x.com">
                <AiFillTwitterCircle />
              </SocialIcon>

              <SocialIcon link="https://linkedin.com">
                <AiFillLinkedin />
              </SocialIcon>

              <SocialIcon link="https://reddit.com">
                <AiFillRedditCircle />
              </SocialIcon>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full min-h-screen bg-cover bg-center relative">
        <IntroductionSection />
      </div>
    </main>
  );
}
