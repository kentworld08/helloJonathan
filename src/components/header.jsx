const Navbar = ({ children }) => {
  return (
    <header className=" bg-white-noise bg-noise-pattern bg-repeat py-4 z-100 w-full fixed top-0 left-0 right-0 shadow-xl z-10 px-5 sm:px-10 lg:px-14 lg:py-6 max-w-90 m-auto xl:px-[119px] xl:py-[17px]">
      {children}
    </header>
  );
};

export default Navbar;
