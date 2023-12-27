import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-xl font-extralight text-gray-800 p-2 mb-4">Your cargo tracking number: <strong>LM171836823TR</strong> </p>
        <div className="text-center bg-gray-800 p-10 py-18 shadow-md w-2/5 border rounded-lg">
          <h1 className="text-4xl font-extralight text-green-500 mb-4"> Successful Payment!</h1>
          <p className="text-lg font-extralight text-white mb-8">Your payment has been successfully received.</p>
          <div className="flex justify-center">
            <Link to="/" className="bg-green-500 text-white font-extralight px-4 py-2 rounded-md hover:bg-green-600 hover:scale-110 duration-500">
              Homepage
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Success