import profileicon from "../assets/icons/profile-icon.png";
import { Link } from "react-router-dom";
import { UsemobileMenuContext } from "./utility/mobileMenuContext";
import linkdinIcon from "../assets/icons/linkdin-icon.png";
import { navMenu } from "./utility/navMenu";
import emailIcon from "../assets/icons/email-icon.png";
import githubicon from "../assets/icons/github-icon.png";
import whatsappicon from "../assets/icons/whatsapp-icon.png";
import MobileMenu from "./mobileMenu";
import { UseColorContext } from "./utility/colorContext";

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navigation = () => {
  const { bgColor, setBgColor } = UseColorContext();
  const { isOpen, setIsOpen } = UsemobileMenuContext();
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handletoggleMenu = () => {
    toggleMenu();
    if (bgColor) {
      setBgColor(false);
    }
  };

  return (
    <div
      className="h-auto flex justify-between items-center gap-x-8 xl:h-[76px]
    "
    >
      <Link
        to="#home"
        onClick={() => scrollToSection("home")}
        className="text-primary-100 flex items-center gap-x-3 lg:gap-x-5 dark:text-primary-50"
      >
        <img
          src={profileicon}
          alt="profile img icon"
          className="h-10 w-10 sm:w-11 sm:h-11 lg:h-14 lg:w-14 xl:h-[40px] xl:w-[40px] "
          loading="lazy"
        />

        <div className="block text-left">
          <h1 className="font-base font-Poppins leading-3 text-primary-100 tracking-tighter sm:font-bold lg:text-3xl xl:font-bold xl:text-[24px]">
            JONATHAN
          </h1>
          <div className="flex items-center gap-x-2 ">
            <div className="w-2 h-2 rounded-full bg-emerald-500 " />
            <p className=" font-light tracking-tighter text-primary-100 lg:text-2xl xl:text-[16px]">
              available for hire
            </p>
          </div>
        </div>
      </Link>
      <div className="lg:flex lg:gap-x-3 max-lg:hidden items-center">
        <Link
          to="#services"
          onClick={() => scrollToSection("services")}
          className="cursor-pointer tracking-tight py-3 px-2 font-Poppins text-primary-100 text-base font-light transition-property lg:text-2xl xl:font-[400] xl:text-center hover:opacity-70"
        >
          Services
        </Link>
        {navMenu.map(({ id, link, to }) => {
          return (
            <nav key={id}>
              <Link
                to={to}
                smooth="true"
                duration={500}
                className="cursor-pointer tracking-tight py-3 px-2 font-Poppins text-primary-100 text-base font-light transition-property lg:text-2xl xl:font-[400] xl:text-center hover:opacity-70"
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
      </div>
      <button
        onClick={handletoggleMenu}
        type="button"
        className=" cursor-pointer lg:hidden"
      >
        {isOpen ? (
          <div className="font-bold text-primary-100 text-base border-2 border-primary-100 py-1 px-2 rounded-full">
            X
          </div>
        ) : (
          <div className=" grid grid-cols-2 ">
            <div className="w-3 h-3 border-2 rounded-full border-primary-200 sm:w-4 sm:h-4" />
            <div className="w-3 h-3 border-2 rounded-full border-primary-200 sm:w-4 sm:h-4" />
            <div className="w-3 h-3 border-2 rounded-full border-primary-200 sm:w-4 sm:h-4" />
            <div className="w-3 h-3 border-2 rounded-full border-primary-200 sm:w-4 sm:h-4" />
          </div>
        )}
      </button>

      <div className="lg:flex lg:gap-x-3 max-lg:hidden">
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
            className="lg:w-12 lg:h-12 xl:h-[38px] xl:w-[38px]"
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
            className="lg:w-12 lg:h-12 xl:h-[38px] xl:w-[38px]"
          />
        </a>
        <a
          href="mailto:kent93226@gmail.com"
          className="hover:bg-primary-100 rounded-full"
        >
          <img
            src={emailIcon}
            alt="link to email"
            className="lg:w-12 lg:h-12 xl:h-[38px] xl:w-[38px]"
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
            className="lg:w-12 lg:h-12 xl:h-[38px] xl:w-[38px]"
          />
        </a>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navigation;
