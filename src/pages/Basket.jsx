import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useCart } from '../context/CardContext';

function Basket() {
  const { cart } = useCart();
  const shipping = 6;
  const discounts = 2;

  const totalProductsPrice = cart.reduce((total, item) => {
    return total + parseFloat(item.saleInfo.listPrice.amount);
  }, 0);

  const totalProductsBill = cart.reduce((total, item) => {
    return total + shipping - discounts + parseFloat(item.saleInfo.listPrice.amount);
  }, 0);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <p className="text-center text-4xl font-extralight p-2 mt-6">My Basket</p>

      <div className="grid grid-cols-3 gap-8 p-10">
        {/* sepete eklenen urunlerin gosterildigi part */}
        <section className="col-span-2 bg-white p-10 py-18 shadow-2xl border rounded-lg">
          <p className="text-center text-2xl font-semibold p-2 mb-2">Order Summary</p>
          <div className="mb-4 grid grid-cols-4 text-center font-extralight p-2 border-b">
            <p className="p-2">TITLE</p>
            <p className="p-2">AUTHORS</p>
            <p className="p-2">PRICE</p>
            <p className="p-2">QUANTITY</p>
          </div>
          {/* Sepet içeriği */}
          <div className="font-extralight grid grid-rows gap-4">
            {cart.map((item) => (
              <div key={item.id} className="mb-4 grid grid-cols-4 text-center">
                <p className="p-2"> {item.volumeInfo.title}</p>
                <p className="p-2"> {item.volumeInfo.authors == null ? "Unknown" : item.volumeInfo.authors}</p>
                <p className="p-2"> ${item.saleInfo.listPrice.amount}</p>
                <p className="p-2">1</p>
              </div>
            ))}
          </div>
        </section>
        {/* fiyat bilgilendirilmesinin yapildigi part */}
        <section className="text-center bg-white p-10 py-18 shadow-2xl border rounded-lg h-72">
          <p className="text-2xl font-semibold p-2 mb-2">Payment Summary</p>
          <section className="grid grid-cols-2">
            <ul className="text-left font-extralight p-2">
              <li className="py-1">Total of Products:</li>
              <li className="py-1">Cargo Total:</li>
              <li className="py-1">Discounts:</li>
            </ul>
            <ul className="text-right font-normal p-2">
              <li className="py-1">${totalProductsPrice.toFixed(2)} </li>
              <li className="py-1">${shipping} </li>
              <li className="py-1">${discounts} </li>
            </ul>
          </section>
          <section className="grid grid-cols-2">
            <ul className="text-left font-medium text-xl p-2 border-t">
              <li>Total:</li>
            </ul>
            <ul className="text-right font-medium text-xl p-2 border-t">
              <li>${totalProductsBill.toFixed(2)}</li>
            </ul>
          </section>
        </section>
      </div >

      <div className="grid place-items-center p-4 mb-32">
        <Link to="/Checkout" className="bg-green-700 text-white font-extralight px-4 py-2 rounded-md hover:bg-green-600 hover:scale-110 duration-500">
          Confirm My Basket
        </Link>
      </div>

      <Footer />
    </div >
  );
}

export default Basket;
