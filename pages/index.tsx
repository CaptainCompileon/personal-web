import Image from "next/image";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillLinkedin, AiFillRedditCircle, AiFillTwitterCircle} from "react-icons/ai";
import devadam from "../public/devadam.jpg";
import React from "react";
import Spline from '@splinetool/react-spline';


export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <main className={darkMode ? "dark bg-gray-700 text-white" : "bg-white"}>
      <div className="w-full h-screen bg-cover bg-center relative">
      <Spline className={'w-full h-screen bg-cover bg-center absolute z-1'} scene="https://prod.spline.design/eZ6h-J9RmGY9avEl/scene.splinecode" />

      <section className="min-h-screen px-10 md:px-20 lg:px-40 ">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">developedbyadam</h1>
          <ul className="flex items-center z-10">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}/>
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
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md: 6-xl">Adam Samko</h2>
          <h3 className="text-2xl py-2">FE Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
            I&apos;m a Front End Developer with 3 years of experience. I have a
            passion for web design and love to create for web and mobile
            devices. I have a strong understanding of HTML, CSS, JavaScript, and
            Angular. I&apos;m always looking to learn new technologies and improve my
            skills.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 z-10 dark:text-teal-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillRedditCircle />
        </div>
        <div className="relative mx-auto bg-gradient-to-bl from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
          <Image src={devadam} layout="fill" objectFit={'cover'} alt={'ggg'}/>
        </div>
      </section>
      </div>
    </main>
  );
}
