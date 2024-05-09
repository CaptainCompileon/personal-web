/* eslint-disable react/jsx-key */
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import devadam from "../public/devadam.jpg";
import React, { Suspense, useEffect, useState } from "react";
import LightSwitch from "@/components/ligh-switch/light-switch";
import { Variant, Variants, motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import MotionCursor from "@/components/motion-cursor";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [showCursor, setShowCursor] = useState(false);

  

  return [
    <Head >
      <title>Adam Samko Resume</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Adam Samko Resume" />
    </Head>,
    <body>
      <main className={darkMode ? "dark bg-gray-700 text-white" : "bg-white"}>
        <div className="w-full h-screen bg-cover bg-center relative">
          {/* <iframe src='https://my.spline.design/infinityblubscopy-85ff1657b94d167ceaff8df5b80dd006/' className="w-full md:w-3/5  h-screen bg-cover bg-center absolute z-1"></iframe> */}
          {/* <iframe src='https://my.spline.design/gradientwaves-39d7e126a4da36e196ee400558b0d644/' className="w-full h-screen bg-cover bg-center absolute z-1"></iframe> */}
          {/* <iframe src='https://my.spline.design/light-d3501e273d770cdcb66a280113e41049/' className="w-full h-screen bg-cover bg-center absolute z-1"></iframe> */}
          {showCursor && (
            <MotionCursor/>
          )}
          <section
            className="min-h-screen px-10 md:px-20 lg:px-40 relative mx-auto"
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
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            {/* <iframe src='https://my.spline.design/loopingstaircaseportal-0df7fdb3c731051b157a2840ef34c790/' className="w-full h-screen bg-cover bg-center absolute z-1"></iframe> */}

            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md: 6-xl">
                Adam Samko
              </h2>
              <h3 className="text-2xl py-2">FE Developer</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
                I&apos;m a Front End Developer with 3 years of experience. I
                have a passion for web design and love to create for web and
                mobile devices. I have a strong understanding of HTML, CSS,
                JavaScript, and Angular. I&apos;m always looking to learn new
                technologies and improve my skills.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 z-10 dark:text-teal-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillRedditCircle />
            </div>
          </section>

          <iframe
          className="w-full h-screen"
            src="https://my.spline.design/digitalpass-70f88a769b765a0720734dfa0956bec4/"
            frameBorder="0"
            width="100%"
            height="1005"
            style={{ cursor: "auto" }}
          ></iframe>
        </div>
      </main>
    </body>,
  ];
}
