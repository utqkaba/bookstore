import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";


function Basket() {
  const cartItems = [
    { id: 1, name: 'Ürün 1', price: 20 },
    { id: 2, name: 'Ürün 2', price: 30 },
    // ... diğer ürünler
  ];
  return (
    <div className="bg-gray-100">
      <Navbar />
      <p className="text-center text-4xl font-extralight p-2 my-6">My Basket</p>

      <div className="grid grid-cols-3 place-items-center">
        {/* sepete eklenen urunlerin gosterildigi part */}
        <section className="col-span-2 bg-white p-10 py-18 shadow-2xl w-11/12 ml-12 border rounded-lg">
          <div>
            {/* Sepet içeriği */}
            {cartItems.map(item => (
              <div key={item.id} className="mb-2">
                {item.name} - {item.price} TL
              </div>
            ))}
          </div>

        </section>
        {/* fiyat bilgilendirilmesinin yapildigi part */}
        <section className="text-center bg-white p-10 py-18 shadow-2xl w-3/4 border rounded-lg">
          <p className="text-2xl font-semibold p-2 mb-2">Order Summary</p>
          <section className="grid grid-cols-2">
            <ul className="text-left font-extralight p-2">
              <li className="py-1">Total of Products:</li>
              <li className="py-1">Cargo Total:</li>
              <li className="py-1">Discounts:</li>
            </ul>
            <ul className="text-right font-normal p-2">
              <li className="py-1">$345</li>
              <li className="py-1">$11</li>
              <li className="py-1">$16</li>
            </ul>
          </section>
          <section className="grid grid-cols-2">
            <ul className="text-left font-medium text-xl p-2 border-t">
              <li>Total:</li>
            </ul>
            <ul className="text-right font-medium text-xl p-2 border-t">
              <li>$340</li>
            </ul>
          </section>
        </section>
      </div>
      <div className="grid place-items-center p-10">
        <Link to="/Checkout" className="bg-green-700 text-white font-extralight px-4 py-2 rounded-md hover:bg-green-600 hover:scale-110 duration-500">
          Confirm My Basket
        </Link>
      </div>
      {/* <Link to="/Checkout" className="flex items-center p-2 mx-4">
        Onayliyorum
      </Link> */}
      <Footer />
    </div>

  )
}

export default Basket