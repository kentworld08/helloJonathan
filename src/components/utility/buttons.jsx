import { UseProjectContext } from "./projectContext";
import arrowbtnicon from "../utility/arrow-icon.png";
import { motion } from "motion/react";
import { UseColorContext } from "./colorContext";

export const ToggleButtons = () => {
  const { active, setActive } = UseProjectContext();

  return (
    <div className="flex justify-center gap-y-3 sm:flex-row sm:gap-y border-[1px] p-1 w-[20rem] border-primary-150 rounded-full justify-self-center md:mt-10 md:w-[25rem] lg:w-[37rem]">
      <button
        type="button"
        onClick={() => setActive("first")}
        className={`  transition-all duration-150 ease-in h-8  w-auto font-circular font-medium text-base/normal rounded-full px-6 md:px-11 md:h-9 lg:px-20 lg:h-14 lg:text-xl ${
          active === "first"
            ? "bg-primary-100 "
            : "bg-slate-100 text-primary-100"
        }`}
      >
        <p
          className={
            active === "first"
              ? "bg-gradient-to-r bg-clip-text text-transparent"
              : ""
          }
        >
          WEB DESIGN
        </p>
      </button>

      <button
        type="button"
        onClick={() => setActive("second")}
        className={` transition-all duration-150 ease-in h-8  w-auto font-circular font-medium text-base/normal rounded-full px-6 md:px-11 md:h-9 lg:px-20 lg:h-14 lg:text-xl ${
          active === "second"
            ? "bg-primary-100"
            : "bg-slate-100 text-primary-100"
        }`}
      >
        <p
          className={
            active === "second"
              ? "bg-gradient-to-r bg-clip-text text-transparent"
              : ""
          }
        >
          MOBILE APP
        </p>
      </button>
    </div>
  );
};

const CustomButton = ({ label, props }) => {
  const { color } = UseColorContext();
  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      type="button"
      className="flex group items-center text-primary-100"
    >
      <div
        className={`rounded-full border-[1px] border-primary-150 w-8 h-8 flex items-center text-center justify-center font-circular group-hover:bg-primary-100  group-hover:text-primary-150 group-hover:transition-all group-hover:duration-200 group-hover:ease-in-out md:w-9 md:h-9 lg:h-14 lg:w-14 xl:h-[76px] xl:w-[76px] ${
          color === "premium-dark" && "text-primary-50"
        }`}
      >
        {props}
      </div>
      <div className="w-xl border-[1px] border-primary-150 flex items-center text-center justify-center font-circular font-medium group-hover:bg-primary-100 group-hover:transition-all group-hover:duration-200 group-hover:text-primary-150 group-hover:ease-in-out  transition-all duration-150 ease-in h-8  w-[20rem]  text-base/normal rounded-full px-6 text-primary-100 md:h-9 md:w-[25rem] lg:h-14 lg:w-[37rem] lg:text-3xl xl:h-[76px] xl:w-[587px]">
        <p
          className={`text-primary-100 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent xl:font-[450] xl:text-[24px] ${
            color === "premium-dark" && "text-primary-50"
          }`}
        >
          {label}
        </p>
      </div>
      <img
        src={arrowbtnicon}
        alt={`${label} ICON`}
        loading="lazy"
        className="w-8 h-8 rounded-full group-hover:rotate-[137deg] group-hover:transition-all group-hover:duration-200 group-hover:bg-primary-100 group-hover:ease-in-out md:w-9 md:h-9 lg:h-14 lg:w-14 xl:h-[76px] xl:w-[76px]"
      />
    </motion.button>
  );
};

export default CustomButton;

export const Footerbuttons = ({ label, ref }) => {
  return (
    <a
      href={ref}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary-50 w-[300px] h-8 text-primary-100 rounded-full hover:text-primary-50 hover:bg-transparent hover:transition-all hover:duration-150 hover:ease-in cursor-pointer hover:border-[1px] hover:border-primary-150 border-[1px] md:h-9 text-center flex justify-center items-center md:text-xl lg:h-14 lg:w-[20rem] lg:text-3xl xl:w-[281.75px] xl:h-14 xl:font-[450] xl:text-[24px]"
    >
      {label}
    </a>
  );
};
