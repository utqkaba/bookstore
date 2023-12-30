import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from 'react';
import { Link } from "react-router-dom";


function CheckoutForm() {
  const [cardHolderName, setCardHolderName] = useState('')
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [address, setAddress] = useState('');
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
    return !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.isConfirmed || !cardNumber || !expiryMonth || !expiryYear || !cvv || !address;
  };

  return (
    <div className="bg-gray-100">
      <Navbar />

      <p className="text-center text-3xl font-extralight p-2 mb-6 border-b ">Personal & Payment Information</p>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-1/2 mx-auto my-8 p-8 bg-white shadow-2xl rounded-md font-extralight">
        {/* personal information */}
        <section className="p-4 mr-2">
          <div className="mb-4 px-2">
            <label htmlFor="firstName" className="block font-normal text-gray-700">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Jane"
              className="mt-1 p-2 w-full border bg-gray-100 rounded-md"
              required
            />
          </div>
          <div className="mb-4 px-2">
            <label htmlFor="lastName" className="block font-normal text-gray-700">Surname</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Appleseed"
              className="mt-1 p-2 w-full border bg-gray-100 rounded-md"
              required
            />
          </div>
          <div className="mb-4 px-2">
            <label htmlFor="email" className="block font-normal text-gray-700">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              className="mt-1 p-2 w-full border bg-gray-100 rounded-md"
              required
            />
          </div>
          <div className="mb-4 px-2">
            <label htmlFor="phone" className="block font-normal text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0123 456 7890"
              className="mt-1 p-2 w-full border bg-gray-100 rounded-md"
              required
            />
          </div>
        </section>
        {/* payment information */}
        <section className="p-4 ml-2">
          <div className="mb-4 px-2">
            <label htmlFor="cardNumber" className="block font-normal text-gray-600">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardHolderName"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              placeholder="Jane Appleseed"
              className="mt-1 p-2 w-full border bg-gray-100 rounded-md"
            />
          </div>
          <div className="mb-4 px-2">
            <label htmlFor="cardNumber" className="block font-normal text-gray-600">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              className="mt-1 p-2 w-full border bg-gray-100 rounded-md"
            />
          </div>
          {/* credit card expiry date & cvv */}
          <div className="grid grid-cols-2 gap-4 mb-4 px-2">
            <div>
              <label htmlFor="expiryDate" className="block font-normal text-gray-600">
                Expiry Date
              </label>
              <section className="grid grid-cols-2 gap-4 ">
                <input
                  type="text"
                  id="expiryMonth"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  placeholder="MM"
                  className="mt-1 p-2 w-full border bg-gray-100  rounded-md"
                /><input
                  type="text"
                  id="expiryYear"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                  placeholder="YY"
                  className="mt-1 p-2 w-full border bg-gray-100  rounded-md"
                />
              </section>
            </div>
            <div>
              <label htmlFor="cvv" className="block font-normal text-gray-600">
                CVC/CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="mt-1 p-2 w-full border bg-gray-100 rounded-md"
              />
            </div>
          </div>

          <address className="mb-4 px-2">
            <label htmlFor="address" className="block font-normal text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 Main St, City, Country"
              className="mt-1 p-2 w-full border bg-gray-100 rounded-md"
            />
          </address>
        </section>
        {/* approve and sumbit button */}
        <section className="grid grid-rows-2">
          <div className="mb-4 px-2">
            <label className="block font-normal text-gray-700 text-sm">
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
            <Link to="/Success" className={`bg-green-700 text-white p-2 rounded-md hover:bg-green-600 hover:scale-110 duration-500 ${isButtonDisabled() ? 'pointer-events-none opacity-50' : ''}`} disabled={isButtonDisabled()}>
              Complete the Payment
            </Link>
          </div>
        </section>
      </form>
      <Footer />
    </div>
  );
}

export default CheckoutForm;
