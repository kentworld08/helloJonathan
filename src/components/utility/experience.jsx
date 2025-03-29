import { motion } from "motion/react";
import { scale } from "./animations";
import { useEffect, useState, useRef } from "react";

export const Experience = ({ label, targetNumber }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animationSpeed = 20; // Lower means faster counting

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = Math.ceil(targetNumber / (1000 / animationSpeed)); // Adjust speed

          const counter = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(counter);
            } else {
              setCount(start);
            }
          }, animationSpeed);
        }
      },
      { threshold: 0.8 } // Trigger when 80% of the section is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [targetNumber]);

  return (
    <div className=" border-[1px] border-primary-150 h-auto items-center py-10 sm:h-60 sm:flex sm:justify-center lg:w-[20rem] lg:h-64 xl:h-[263px] xl:w-[396px] bg-white-noise bg-repeat">
      <div className="sm:flex sm:flex-col sm:text-left sm:justify-center sm:gap-y-5 px-4">
        <h1
          ref={ref}
          className=" font-Poppins font-light text-primary-200 text-5xl leading-10 lg:text-7xl xl:font-[300] xl:text-[74px] xl:leading-[172px]"
        >
          {`${count}+`}
        </h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition="transition"
          viewport="viewport"
          variants={scale}
          className=" font-Poppins font-light tracking-tighter text-2xl text-primary-100 leading-10 lg:text-3xl xl:font-[400] xl:text-[23px] xl:leading-[45px]"
        >
          {label}
        </motion.p>
      </div>
    </div>
  );
};
