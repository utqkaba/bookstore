import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";


function Basket() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <p>Sepete eklenen urunler</p>
      <button>onay verilirse odeme sayfasina gecicek</button>
      <Link to="/Checkout" className="flex items-center p-2 mx-4">
        Onayliyorum
      </Link>
      <Footer />
    </div>

  )
}

export default Basket