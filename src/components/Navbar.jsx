import { GiBookshelf, GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 px-4 flex justify-between items-center">
      <div className="flex items-center p-2 mx-12">
        <GiBookshelf color="white" size="2em" />
        <a to="/" className="text-white font-extralight text-lg mx-2 p-2">BOOKSTORE </a>
      </div>
      <div className="flex items-center p-2 mx-4">
        <GiShoppingCart color="white" size="2em" />
      </div>
    </nav>
  );
};

export default Navbar;
