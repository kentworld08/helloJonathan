import { ToggleButtons } from "./utility/buttons";
import arrowicon from "../assets/icons/arrow-icon.png";
import { Link } from "react-router-dom";
import { WebApps } from "./webApps";
import { MobileApps } from "./mobileApps";
import { UseProjectContext } from "./utility/projectContext";
import { motion } from "motion/react";
import { scale, variants } from "./utility/animations";
import { UseColorContext } from "./utility/colorContext";

export const Featured = () => {
  const { active } = UseProjectContext();
  const { color } = UseColorContext();
  return (
    <section id="featured" className="mt-16 sm:mt-28 lg:mt-36 xl:mt-32">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        exit="exit"
        transition="transition"
        viewport="viewport"
        variants={scale}
        className={`leading-10 text-base/loose font-circular tracking-tighter text-center font-bold sm:text-2xl md:text-3xl lg:text-7xl xl:font-[450] xl:text-[94px] xl:leading-[172px] ${
          color === "premium-dark"
            ? "text-primary-50"
            : "bg-gradient-to-r bg-clip-text text-transparent"
        }`}
      >
        FEATURED PROJECT
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        transition="transition"
        viewport="viewport"
        variants={variants}
        className="mt-5 lg:flex lg:justify-between lg:items-center lg:mt-20"
      >
        <ToggleButtons />
        <Link
          to={"projects"}
          className="flex items-center gap-x-4 justify-center mt-5 md:mt-10 "
        >
          <p
            className={`font-circular font-medium text-base/loose text-primary-100 leading-10 md:text-lg lg:text-3xl ${
              color === "premium-dark" && "text-primary-50"
            }`}
          >
            VIEW MORE
          </p>

          <img
            src={arrowicon}
            alt="view all projects icon"
            loading="lazy"
            className="h-5 w-5 hover:bg-primary-100 rounded-full sm:h-7 sm:w-7 md:w-8 md:h-8 lg:h-12 lg:w-12"
          />
        </Link>
      </motion.div>
      <div className="mt-20 bg-white-noise bg-repeat overflow-hidden">
        {active === "first" && <WebApps />}
        {active === "second" && <MobileApps />}
      </div>
    </section>
  );
};
