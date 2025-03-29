import CustomButton from "../components/utility/buttons";
import { scale, variants } from "./utility/animations";
import { motion } from "motion/react";
import { UseColorContext } from "./utility/colorContext";

export const Services = () => {
  const { color } = UseColorContext();
  return (
    <section id="services" className="mt-16 sm:mt-28 lg:mt-36">
      <div className="text-center flex justify-center flex-col items-center w-full">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition="transition"
          viewport="viewport"
          variants={scale}
          className={`leading-10 text-base/loose font-circular tracking-tighter text-center font-bold sm:text-2xl md:text-3xl lg:text-7xl xl:font-[450] xl:text-[94px] xl:leading-[122px] xl:w-[1189px] xl:h-[244px] ${
            color === "premium-dark"
              ? "text-primary-50"
              : "bg-gradient-to-r bg-clip-text text-transparent"
          }`}
        >
          THE SERVICES WE PROVIDE
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition="transition"
          viewport="viewport"
          variants={variants}
          className={`font-Poppins font-light text-center text-primary-100 mt-5 text-sm/loose md:text-lg lg:text-3xl/10 lg:mt-10 xl:w-[734px] xl:h-[135px] xl:font-[400] xl:text-[23px] xl:leading-[45px]
            ${color === "premium-dark" && "text-primary-50"}`}
        >
          CREATING EFFICIENT AND SCALABLE SOFTWARE SOLUTIONS TAILORED TO CLIENT
          NEEDS, ENSURING SEAMLESS PERFORMANCE AND FUNCTIONABILITY ACROSS
          PLATFORMS.
        </motion.p>
        <motion.div
          whileInView={{
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
            },
          }}
          viewport={{ once: false, amount: 0.5 }}
          initial={{ opacity: 0 }}
          className="mt-10 lg:mt-20 mb-32"
        >
          <CustomButton label="WEB DESIGN" props="1" />
          <CustomButton label="EXPERT WEBFLOW" props="2" />
          <CustomButton label="LANDING PAGE" props="3" />
          <CustomButton label="MOBILE APP" props="4" />
        </motion.div>
      </div>
    </section>
  );
};
