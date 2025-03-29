import { UseColorContext } from "./utility/colorContext";

export const Main = ({ children }) => {
  const { color } = UseColorContext();
  return (
    <main
      className={` w-full px-5 sm:px-10 py-4   bg-cover xl:px-[119px] max-w-90 m-auto transition-all duration-500 ease-in-out ${
        color === "white-noise" && "bg-white-noise "
      } ${color === "warm-flame" && "bg-warm-flame bg-cover bg-center"}
      ${color === "cyan-blue" && "bg-cyan-blue bg-cover bg-center"}
        ${color === "cold-evening" && "bg-cold-evening bg-cover bg-center"}
         ${color === "premium-dark" && "bg-premium-dark bg-cover bg-center"}
           ${color === "winter-neva" && "bg-winter-neva bg-cover bg-center"}
             ${color === "grown-early" && "bg-grown-early bg-cover bg-center"}
                ${color === "night-fade" && "bg-night-fade bg-cover bg-center"}
                 ${
                   color === "gold-flame" && "bg-gold-flame bg-cover bg-center"
                 }`}
    >
      {children}
    </main>
  );
};
