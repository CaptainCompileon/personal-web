"use client";
import React, { useState } from "react";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./header.anim";
import Link from "./link";
import Curve from "./curve";

export const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Education",
    href: "/#education",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      style={{ zIndex: 10000 }}
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <div className={styles.footer}>
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
