import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Checkout from "./pages/Checkout"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Checkout" element={<Checkout />} />

      </Routes>
    </Router>
  )
}