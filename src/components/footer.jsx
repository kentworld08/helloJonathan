import { Footerbuttons } from "./utility/buttons";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-primary-100 px-5 w-full h-[723px] items-center flex flex-col justify-center sm:px-10 max-w-90 m-auto xl:px-[122px] xl:py-[90px]"
    >
      <div className=" py-24">
        <h1 className="bg-gradient-to-r bg-clip-text text-transparent text-6xl/loose font-bold font-circular tracking-tighter leading-11 sm:text-8xl sm:mb-4 md:text-9xl md:mb-6 lg:text-[17vw] lg:mb-9 xl:w-[1195px] xl:h-[157px] xl:font-[450] xl:text-[200px] xl:leading-[157px] xl:tracking-normal">
          LET'S TALK
        </h1>
        <div className="flex flex-col justify-center items-center flex-wrap sm:flex-row mt-13 space-y-5 sm:flex  sm:items-center sm:justify-between sm:space-y-0 sm:gap-3">
          <Footerbuttons
            label="LINKDIN"
            ref="https://www.linkedin.com/in/jonathan-adebo-196819340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          />
          <Footerbuttons label="GITHUB" ref="https://github.com/kentworld08" />
          <Footerbuttons label="EMAIL" ref="mailto:kent93226@gmail.com" />
          <Footerbuttons label="CONTACT ME" ref="https://wa.me/2349059900289" />
        </div>
        <div className="mt-10 flex justify-between gap-x-4 ">
          <p className="font-circular text-left font-medium text-primary-50">
            ©PORTFOLIO ALL &nbsp;
            <span className="font-circular font-light text-primary-150  ">
              RIGHTS RESERVED
            </span>
          </p>
          <p className="font-circular font-light text-right text-primary-150 ">
            DESIGNED BY &nbsp;
            <span className="font-circular font-medium text-primary-50">
              JULIUS ADEBO
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
