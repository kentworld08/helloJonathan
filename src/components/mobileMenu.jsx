import { motion } from "framer-motion";
import { UsemobileMenuContext } from "./utility/mobileMenuContext";
import { navMenu } from "./utility/navMenu";
import { Link } from "react-router-dom";
import linkdinIcon from "../assets/icons/linkdin-icon.png";
import emailIcon from "../assets/icons/email-icon.png";
import githubicon from "../assets/icons/github-icon.png";
import whatsappicon from "../assets/icons/whatsapp-icon.png";
import { scrollToSection } from "./navigation";

const MobileMenu = () => {
  const { isOpen, setIsOpen } = UsemobileMenuContext();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuVariants = {
    hidden: { x: "100%" }, // Start off-screen (right)
    visible: { x: 0 }, // Slide into view
  };

  const handleScroll = () => {
    scrollToSection("services");
    toggleMenu();
  };

  return (
    <div className="absolute overflow-x-hidden bg-primary-50 lg:hidden">
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuVariants}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-[4.52rem] right-0 h-screen w-64 bg-white text-primary-100 shadow-xl sm:top-[4.75rem]"
      >
        <nav className="flex flex-col gap-6 p-6 text-center">
          <Link
            to="#services"
            onClick={handleScroll}
            className="cursor-pointer tracking-tight py-3 px-2 font-Poppins text-primary-100 text-base font-light transition-property lg:text-2xl xl:font-[400] xl:text-center hover:opacity-70"
          >
            Services
          </Link>
          {navMenu.map(({ id, link, to }) => {
            return (
              <nav key={id} onClick={toggleMenu}>
                <Link
                  to={to}
                  className="cursor-pointer tracking-tight py-3 px-2 font-Poppins  text-primary-100 text-base font-light transition-property hover:opacity-70"
                >
                  {link}
                </Link>
              </nav>
            );
          })}
          <a
            href="https://wa.me/2349059900289"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer tracking-tight py-3 px-2 font-Poppins text-primary-100 text-base font-light transition-property lg:text-2xl xl:font-[400] xl:text-center hover:opacity-70"
          >
            Contact
          </a>
          <div className="flex gap-x-2 items-center justify-center ">
            <a
              href="https://www.linkedin.com/in/jonathan-adebo-196819340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-100 rounded-full"
            >
              <img
                src={linkdinIcon}
                alt="link to Linkdin"
                loading="lazy"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </a>
            <a
              href="https://github.com/kentworld08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-100 rounded-full"
            >
              <img
                src={githubicon}
                alt="link to github"
                loading="lazy"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </a>
            <a
              href="mailto:kent93226@gmail.com"
              className="hover:bg-primary-100 rounded-full"
            >
              <img
                src={emailIcon}
                alt="link to email"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </a>
            <a
              href="https://wa.me/2349059900289"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-100 rounded-full"
            >
              <img
                src={whatsappicon}
                alt="link to whatsapp"
                loading="lazy"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </a>
          </div>
        </nav>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
