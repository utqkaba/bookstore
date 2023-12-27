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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini kullanabilir veya başka bir işlem yapabilirsiniz
    console.log('Form Verileri:', formData);
  };

  const isButtonDisabled = () => {
    return !formData.firstName || !formData.lastName || !formData.email || !formData.phone;
  };

  return (
    <div className="bg-red-500">
      <Navbar />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">Adınız</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Soyadınız</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">E-posta Adresiniz</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Telefon Numaranız</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="flex justify-center">
          <Link to="/Success" className={`bg-blue-500 text-white p-2 rounded-md ${isButtonDisabled() ? 'pointer-events-none opacity-50' : ''}`} disabled={isButtonDisabled()}>
            Ödemeyi Tamamla
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default CheckoutForm;
