import { motion, useMotionValue } from "framer-motion";
import React, { useEffect } from "react";

type Props = {};

const MotionCursor = (props: Props) => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  
  return (
    <motion.div className="cursor" style={{ left: mouse.x, top: mouse.y }} />
  );
};

export default MotionCursor;
