import { GiBookshelf, GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useCart } from '../context/CardContext';


const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-900 px-4 flex justify-between items-center">
      <div className="flex items-center p-2 mx-12">
        <GiBookshelf color="white" size="2em" />
        <Link to="/" className="animate-pulse flex items-center text-white font-extralight text-lg p-2 mx-2 hover:scale-110 duration-500">
          BOOKSTORE
        </Link>
      </div>
      <Link to="/Basket" className="flex items-center p-2 mx-4 hover:scale-110 duration-500">
        <GiShoppingCart color="white" size="2em" />
        {cart.length > 0 && (
          <span className="bg-white text-gray-800 rounded-full scale-75 px-2 mr-1 ml-2">
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
