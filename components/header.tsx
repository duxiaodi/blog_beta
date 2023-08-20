import Nav from "./nav";

const Header = () => {
  return (
    <header className="sm:absolute px-5 right-0 z-[9] flex items-center h-14 flex justify-center items-center">
      <Nav />
    </header>
  );
};

export default Header;
