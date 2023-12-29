import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from 'react';
import { Link } from "react-router-dom";


function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isConfirmed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // If the input is a checkbox, use checked value; otherwise, use value
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the confirmation checkbox is checked before proceeding
    if (formData.isConfirmed) {
      // Continue with form submission or other actions
      console.log('Form Verileri:', formData);
    } else {
      alert('Lütfen onay kutusunu işaretleyin.');
    }
  };

  const isButtonDisabled = () => {
    return !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.isConfirmed;
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-6 bg-gray-100 shadow-2xl rounded-md">
        <p className="text-center text-3xl font-extralight p-2 mb-6 border-b border-gray-800 ">Personal & Payment Information</p>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-800 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Surname</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-800 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-800 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-800 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-extralight text-sm">
            <input
              type="checkbox"
              name="isConfirmed"
              checked={formData.isConfirmed}
              onChange={handleChange}
              className="mr-2 ml-1 border border-gray-800 rounded-md"
            />
            Approve
          </label>
        </div>
        <div className="flex justify-center">
          <Link to="/Success" className={`bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600 hover:scale-110 duration-500 ${isButtonDisabled() ? 'pointer-events-none opacity-50' : ''}`} disabled={isButtonDisabled()}>
            Complete the Payment
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default CheckoutForm;
