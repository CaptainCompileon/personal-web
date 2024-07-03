"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Nav, { navItems } from "./nav";
import gsap from "gsap";
import LightSwitch from "@/components/ligh-switch/light-switch";
interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Header({ setDarkMode, darkMode }: HeaderProps) {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);

  return (
    <>
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between py-2 text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4 md:px-6"
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ms-2">
            <a className="text-xl text-black dark:text-white font-burtons" href="#">
            developedbyadam
            </a>
          </div>
         

          <div
            className="!visible  hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent2"
            data-twe-collapse-item
          >
            <ul
              className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row pb-1"
              data-twe-navbar-nav-ref
            >
              { navItems && navItems.map((navItem, index) => (
                <li
                  className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                  data-twe-nav-item-ref
                  key={`navItem${index}`}
                >
                  <a
                    className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    href={navItem.href}
                    key={`navItemLink${index}`}
                    data-twe-nav-link-ref
                  >
                    {navItem.title}
                  </a>
                </li>

              ))
              
              }
              
            </ul>
          </div>
          <button
            className="block border-0 bg-transparent px-2 "
            type="button"
          >
            <LightSwitch
              classes="cursor-pointer pb-2"
              onClickFn={() => setDarkMode(!darkMode)}
            ></LightSwitch>
          </button>
        </div>
      </nav>
      <div
        ref={button}
        style={{ zIndex: 10001 }}
        className={styles.headerButtonContainer}
      >
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
