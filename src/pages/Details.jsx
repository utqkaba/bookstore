import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CardContext';

const Details = () => {
  const [book, setBook] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(response => setBook(response.data))
      .catch(err => setError(err.message));
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 gap-4 m-4 p-4">
        {book.volumeInfo && (
          <>
            <div className="col-span-1 grid place-items-center">
              <img className="h-96 w-72" src={book.volumeInfo.imageLinks.medium} alt={book.volumeInfo.title} />
            </div>
            <div className="col-span-1 text-left bg-white p-10 py-18 shadow-2xl border rounded-lg grid place-items-center"> {/* Added grid properties */}
              <p className="text-3xl font-semibold p-2">{book.volumeInfo.title}</p>
              <section className='p-2 font-extralight border-t'>
                <p className='py-1'><strong>Authors:</strong> {book.volumeInfo.authors == null ? "Unknown" : book.volumeInfo.authors}</p>
                <p className='py-1'><strong>Publisher:</strong> {book.volumeInfo.publisher == null ? "Unknown" : book.volumeInfo.publisher}</p>
                <p className='py-1'><strong>Published Date:</strong> {book.volumeInfo.publishedDate == null ? "Unknown" : book.volumeInfo.publishedDate}</p>
                <p className='py-1'><strong>Page Count:</strong> {book.volumeInfo.pageCount == null ? "Unknown" : book.volumeInfo.pageCount}</p>
                <p className='py-1'><strong>Price:</strong> ${book.saleInfo.listPrice.amount}</p>
                <p className='py-1'><strong>Categories:</strong> {book.volumeInfo.categories == null ? "Unknown" : book.volumeInfo.categories}</p>
              </section>
            </div>
            <div className="col-span-2 text-justify bg-white p-10 py-18 shadow-2xl border rounded-lg grid place-items-center"> {/* Added grid properties */}
              <p className='py-1 px-6 font-extralight'><strong className='text-xl'>Description:</strong> {book.volumeInfo.description} </p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Details;
