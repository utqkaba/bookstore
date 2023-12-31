import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mb-2 p-2">
          <BsCheck2Circle color="green" size="6em" />
        </div>
        <p className="text-xl font-extralight text-gray-800 p-2 mb-4">Your cargo tracking number: <strong>LM171836823TR</strong> </p>
        <div className="text-center bg-white p-10 py-18 shadow-2xl w-2/5 border rounded-lg">
          <h1 className="text-4xl font-extralight text-green-700 mb-4"> Successful Payment!</h1>
          <p className="text-lg font-extralight text-gray-800 mb-8">Your payment has been successfully received.</p>
          <div className="flex justify-center">
            <Link to="/" className="bg-green-700 text-white font-extralight px-4 py-2 rounded-md hover:bg-green-600 hover:scale-110 duration-500">
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