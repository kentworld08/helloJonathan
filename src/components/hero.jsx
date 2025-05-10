import profileimg from "../assets/images/profile-img.png";
import { motion } from "motion/react";
import { scale, left, right } from "./utility/animations";
import { UseColorContext } from "./utility/colorContext";

export const Hero = () => {
  const { color } = UseColorContext();
  return (
    <section id="home">
      <div className=" mt-20 text-center sm:mt-28 md:mt-32 lg:mt-48 xl:max-w-[882px] xl:justify-self-center xl:max-h-[314px] xl:mt-[162px]">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition="transition"
          viewport="viewport"
          variants={scale}
          className={`leading-10 text-base/loose font-circular tracking-tighter text-center font-bold sm:text-2xl md:text-3xl lg:text-7xl xl:font-[450] xl:text-[144px] xl:leading-[157px] xl:text-center  ${
            color === "premium-dark"
              ? "text-primary-50"
              : "bg-gradient-to-r bg-clip-text text-transparent"
          }`}
        >
          EXPLORE MY PORTFOLIO
        </motion.h1>
      </div>
      <div className="relative py-1 flex flex-col gap-y-10 md:mt-8 lg:gap-y-16 xl:gap-y-[222px]">
        <div className="text-center md:flex md:justify-between md:w-full">
          <motion.p
            initial="initial"
            whileInView="whileInView"
            transition="transition"
            viewport="viewport"
            variants={left}
            className={`font-light text-center font-Poppins tracking-tighter text-primary-100 sm:text-lg md:text-xl lg:text-3xl xl:font-[400] xl:text-[23px] xl:leading-[45px] ${
              color === "premium-dark" && "text-primary-50"
            }`}
          >
            developers et. 2024
          </motion.p>
          <motion.p
            initial="initial"
            whileInView="whileInView"
            transition="transition"
            viewport="viewport"
            variants={right}
            className={`font-light font-sans tracking-tighter text-primary-100 text-center text-base/loose sm:text-lg md:text-xl/8 md:w-40 lg:text-3xl lg:w-60 xl:font-Poppins xl:font-[400] xl:text-[23px] xl:leading-[45px] xl:text-right ${
              color === "premium-dark" && "text-primary-50"
            }`}
          >
            i am passionate about creating websites that stand out from the
            crowd
          </motion.p>
        </div>
        {/* <figure className="hidden md:block xl:w-[874px] xl:h-[707px] xl:p-[10px] xl:absolute xl:left-[2rem] xl:right-[168px]">
          <img
            src={profileimg}
            alt="profile image"
            loading="lazy"
            className="md:absolute md:nset-0 md:w-[50vw] md:min-w-[400px] md:h-auto md:max-w-full md:object-cover md:-top-5 md:left-[9rem] md:right-[3rem] xl:w[854px] xl:h-[687px] xl:-top-[8rem]"
          />
        </figure> */}
        <div className="md:w-full ">
          <motion.p
            initial="initial"
            whileInView="whileInView"
            transition="transition"
            viewport="viewport"
            variants={right}
            className={`font-light text-center font-Poppins tracking-tighter text-primary-100 text-sm/loose sm:text-lg sm:tracking-tight sm:leading-8 md:justify-self-end lg:text-3xl/loose xl:text-[23px] xl:leading-[45px] xl:text-right ${
              color === "premium-dark" && "text-primary-50"
            }`}
          >
            WEB DESIGN <br /> EXPERT WEBFLOW <br /> LANDING PAGE <br /> MOBILE
            APP
          </motion.p>
        </div>
      </div>
    </section>
  );
};
