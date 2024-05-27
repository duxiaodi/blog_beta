import Nav from "./nav";

const Header = () => {
  return (
    <header className="sm:absolute w-full px-5 right-0 z-[9] flex items-center h-14 flex justify-end items-center light:bg-[#252b33]">
      <Nav />
    </header>
  );
};

export default Header;
