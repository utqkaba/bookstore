import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Basket from "./pages/Basket"
import Checkout from "./pages/Checkout"
import Details from "./pages/Details"
import Success from "./pages/Success"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </Router>
  )
}