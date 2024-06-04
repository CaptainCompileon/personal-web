import {
  SpringOptions,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { Ref, useEffect, useState } from "react";

type Props = {
  stickyElement: Ref<HTMLAnchorElement>;
};

const MotionCursor = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const cursorSize = isHovered ? 60 : 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions: SpringOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      props.stickyElement.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      mouse.x.set(center.x - cursorSize / 2);
      mouse.y.set(center.y - cursorSize / 2);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = (e) => {
    setIsHovered(true);
  };

  const manageMouseLeave = (e) => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    props.stickyElement.current.addEventListener("mouseover", manageMouseOver);
    props.stickyElement.current.addEventListener(
      "mouseleave",
      manageMouseLeave,
    );
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      props.stickyElement.current.addEventListener(
        "mouseover",
        manageMouseOver,
      );
      props.stickyElement.current.addEventListener(
        "mouseleave",
        manageMouseLeave,
      );
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      animate={{ width: cursorSize }}
    />
  );
};

export default MotionCursor;
