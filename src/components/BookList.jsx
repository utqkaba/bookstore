// src/components/BookList.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import BookCard from './BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=react&filter=paid-ebooks&key=AIzaSyBOYuYNIW3OSKWicmtfJ_UPfAAIlJdNFtE")
      .then(response => { setBooks(response.data.items); })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 m-4">
      {books.map((item, index) => {
        const thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
        const amount = item.saleInfo.listPrice.amount;
        const authors = item.volumeInfo.authors;

        if (thumbnail != undefined && amount != undefined) {
          return (
            <div key={index} className="border p-4 font-extralight rounded-md bg-white">
              <img className="h-44 w-36 mx-auto mb-4" src={thumbnail} alt={item.volumeInfo.title} />
              <p className="text-3xl font-lights text-center">{item.volumeInfo.title}</p>
              <p><strong>Authors:</strong> {authors == null ? "Unknown" : authors}</p>
              <p><strong>Price:</strong> ${amount}</p>
              <div className='grid grid-cols-2 align-bottom text-center mt-4 gap-4'>
                <Link to="/Details" className="bg-gray-800 text-white font-extralight px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 hover:scale-105 duration-500">
                  Details
                </Link>
                <Link to="/Details" className="bg-gray-300 text-gray-800 font-extralight px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white hover:scale-105 duration-500">
                  Buy
                </Link>
              </div>
            </div>
          )
        }
        return null; // handle cases where thumbnail or amount is undefined
      })}
    </div>
  );
};

export default BookList;
