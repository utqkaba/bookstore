import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Basket from "./pages/Basket"
import Checkout from "./pages/Checkout"
import Details from "./pages/Details"
import Success from "./pages/Success"
import { CartProvider } from './context/CardContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </Router>
    </CartProvider>

  )
}