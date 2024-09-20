import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <nav className="flex bg-white shadow-md p-1">
      <img src={logo} alt="logo" className="max-w-12 max-h-12 object-cover" />
      <h1 className="self-center">Navbar</h1>
    </nav>
  );
};

export default Navbar;
