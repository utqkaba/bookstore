import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Details = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setUsers(response.data))
      .catch(err => {
        setError(err.message);
      });
  }, []);

  // if (!book) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center border border-red-500 m-4 p-4">
        <h2 className="text-2xl font-bold mb-4">{users.userId}</h2>
        <p className="text-gray-600 mb-2">{users.title}</p>
        <p className="text-gray-600 mb-2">{users.body}</p>
      </div>
      <Footer />

    </div>
  );
};

export default Details;
