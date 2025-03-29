import arrowIcon from "../assets/icons/arrow-icon.png";
import { Link } from "react-router-dom";
import { Experience } from "./utility/experience";
import { motion } from "motion/react";
import { variants } from "./utility/animations";
import { UseColorContext } from "./utility/colorContext";

export const About = () => {
  const { color } = UseColorContext();
  return (
    <section id="about">
      <div className=" text-center mt-10 sm:mt-28 md:flex md:justify-between md:gap-x-10 xl:mt-32 xl:h-[172px] xl:gap-x-[163px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition="transition"
          viewport="viewport"
          variants={variants}
        >
          <Link
            to="about"
            smooth="true"
            duration={500}
            className="flex justify-center gap-x-3 items-center text-center sm:mb-5 lg:gap-x-4 xl:gap-x-[22px]"
          >
            <h1
              className={`text-base/loose font-bold font-circular tracking-tighter leading-10 sm:text-2xl md:text-3xl lg:text-7xl xl:font-[450] xl:text-[94px] xl:leading-[172px] xl:text-center  ${
                color === "premium-dark"
                  ? "text-primary-50"
                  : "bg-gradient-to-r bg-clip-text text-transparent"
              }`}
            >
              ABOUT
            </h1>

            <img
              src={arrowIcon}
              alt="about page icon"
              loading="lazy"
              className="w-5 h-5 leading-10 hover:bg-primary-100 rounded-full sm:w-7 sm:h-7 md:w-8 md:h-8 lg:h-12 lg:w-12 xl:w-16 xl:h-16"
            />
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition="transition"
          viewport="viewport"
          variants={variants}
          className=" xl:w-[587px] xl:h-[135px]"
        >
          <p
            className={`font-Poppins font-light text-primary-100 tracking-normal text-center text-sm/loose sm:w-[30rem] sm:justify-self-center md:text-wrap md:text-right md:text-lg lg:text-2xl lg:w-[34.5rem] xl:font-[400] xl:text-[23px] xl:leading-[45px] ${
              color === "premium-dark" && "text-primary-50"
            }`}
          >
            ADEBO JONATHAN IS A TALENTED FREELANCE DEVELOPER WITH STRONG
            TECHNICAL SKILLS AND A CREATIVE APPROACH TO PROBLEM-SOLVING.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        transition="transition"
        viewport="viewport"
        variants={variants}
        className="mt-10 md:flex md:justify-center lg:mt-28 xl:mt-28"
      >
        <Experience targetNumber={30} label=" SUCCESS PROJECT" />
        <Experience targetNumber={50} label=" PRODUCT LAUNCHES" />
        <Experience targetNumber={2} label="YEARS EXPERIENCE" />
      </motion.div>
    </section>
  );
};
