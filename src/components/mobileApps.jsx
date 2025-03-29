import { MobileAppProjects } from "./projectSlider";
import { motion } from "framer-motion";
import { a } from "motion/react-client";
import { useEffect, useState } from "react";
import { useId } from "react";

export const MobileApps = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [xPosition, setXPosition] = useState(0);

  useEffect(() => {
    let animationFrame;

    const moveSlideshow = () => {
      if (!isPaused) {
        setXPosition((prev) => (prev <= -100 ? 0 : prev - 0.1)); // Continuous left slide
      }
      animationFrame = requestAnimationFrame(moveSlideshow);
    };

    animationFrame = requestAnimationFrame(moveSlideshow);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-10 ">
      <div
        onMouseEnter={() => setIsPaused(true)} // Pause on hover
        onMouseLeave={() => setIsPaused(false)}
        className=" flex items-center overflow-x-hidden"
      >
        <motion.div
          style={{ x: `${xPosition}%` }}
          className="flex flex-shrink-0"
        >
          {MobileAppProjects.map(({ name, address }) => {
            const id = useId();

            return (
              <a
                key={id}
                href={address}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-20 w-20 pr-10 sm:h-24 sm:w-24 md:w-32 md:h-32 lg:h-40 lg:w-40 lg:pr-14 xl:h-[330.36px] xl:w-[339px] xl:pr-20 cursor-pointer hover:opacity-90"
                  src={name}
                  alt={name}
                  loading="lazy"
                />
              </a>
            );
          })}
        </motion.div>
        <motion.div
          style={{ x: `${xPosition}%` }}
          className="flex flex-shrink-0 items-center"
        >
          {MobileAppProjects.map(({ name, address }) => {
            const id = useId();
            return (
              <a
                key={id}
                href={address}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-20 w-20 pr-10 sm:h-24 sm:w-24 md:w-32 md:h-32 lg:h-40 lg:w-40 lg:pr-14 xl:h-[330.36px] xl:w-[339px] xl:pr-20 cursor-pointer hover:opacity-90"
                  src={name}
                  alt={name}
                  loading="lazy"
                />
              </a>
            );
          })}
        </motion.div>
      </div>
      <p className="bg-gradient-to-r bg-clip-text text-transparent text-base/loose font-medium font-circular tracking-tighter leading-10 sm:mt-4 md:text-xl md:mt-8 lg:mt-14 lg:text-3xl">
        MOBILE APP DESIGNS
      </p>
    </div>
  );
};
