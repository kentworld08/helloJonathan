import { UseColorContext } from "./colorContext";
import settingsIcon from "../utility/profile-icon.png";
import { motion } from "motion/react";
import { UsemobileMenuContext } from "./mobileMenuContext";

export const BgColor = () => {
  const { setColor, bgColor, setBgColor } = UseColorContext();
  const { isOpen, setIsOpen } = UsemobileMenuContext();
  const handleContainerClick = (e) => {
    const buttonValue = e.target.getAttribute("data-value");
    if (buttonValue) {
      setColor(buttonValue);
    }
  };
  const toggleMenu = () => setBgColor((prev) => !prev);
  const handletoggleMenu = () => {
    toggleMenu();
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const menuVariants = {
    hidden: { x: "100%" }, // Start off-screen (right)
    visible: { x: 0 }, // Slide into view
  };

  return (
    <div>
      <button
        onClick={handletoggleMenu}
        type="button"
        className={`px-4 py-2 bg-primary-75  justify-center items-center flex fixed top-[300px] right-0 z-20`}
      >
        <motion.img
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          src={settingsIcon}
          alt={settingsIcon}
          loading="lazy"
          className="h-8 w-8"
        />
      </button>
      <motion.div
        initial="hidden"
        animate={bgColor ? "visible" : "hidden"}
        variants={menuVariants}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        onClick={handleContainerClick}
        className="h-fit w-44  px-5 pb-5 pt-20 fixed top-[300px] right-0 space-y-8 flex flex-col items-end bg-primary-200 z-10"
      >
        <div className="gap-2 flex flex-wrap">
          <button
            type="button"
            data-value="white-noise"
            className="h-10 w-10 rounded-full bg-white-noise border-none"
          />
          <button
            type="button"
            data-value="cold-evening"
            className="h-10 w-10 rounded-full bg-cold-evening border-none"
          />
          <button
            type="button"
            data-value="premium-dark"
            className="h-10 w-10 rounded-full bg-premium-dark border-none"
          />
          <button
            type="button"
            data-value="winter-neva"
            className="h-10 w-10 rounded-full bg-winter-neva border-none"
          />
          <button
            type="button"
            data-value="grown-early"
            className="h-10 w-10 rounded-full bg-grown-early border-none"
          />
          <button
            type="button"
            data-value="night-fade"
            className="h-10 w-10 rounded-full bg-night-fade border-none"
          />
          <button
            type="button"
            data-value="warm-flame"
            className="h-10 w-10 rounded-full bg-warm-flame border-none"
          />
          <button
            type="button"
            data-value="gold-flame"
            className="h-10 w-10 rounded-full bg-gold-flame border-none"
          />
          <button
            type="button"
            data-value="cyan-blue"
            className="h-10 w-10 rounded-full bg-cyan-blue border-none"
          />
        </div>
      </motion.div>
    </div>
  );
};
