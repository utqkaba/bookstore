// src/components/BookList.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import BookCard from './BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // API'den kitapları çekmek için gerekli endpoint'i kullanın
    axios.get("https://www.googleapis.com/books/v1/volumes?q=react&filter=ebooks&key=AIzaSyBOYuYNIW3OSKWicmtfJ_UPfAAIlJdNFtE")
      .then(response => { setBooks(response.data.items); })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []); // Boş dependency array, sadece bir kere çalışmasını sağlar

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 m-4">
      {
        books.map((item, index) => {
          const thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
          const amount = item.saleInfo.listPrice.amount;
          const authors = item.volumeInfo.authors;
          const publisher = item.volumeInfo.publisher;

          if (thumbnail != undefined && amount != undefined) {
            return (
              <div key={index} >
                <div className="border p-4 font-extralight rounded-md">
                  <img className="h-64 w-64" src={thumbnail} alt={item.volumeInfo.title} />
                  <p className="text-3xl font-lights"> {item.volumeInfo.title} </p>
                  <p> <strong>Authors:</strong> {authors == null ? "Unknown" : authors} </p>
                  <p> <strong>Publisher:</strong> {publisher == null ? "Unknown" : publisher} </p>
                  <p> <strong>Price:</strong> ${amount} </p>
                  <Link to="/Details" className="flex items-center p-2 mx-4 hover:scale-105 duration-500">
                    <button>click me</button>
                  </Link>
                </div>
              </div>
            )
          }

        })
      }
    </div>
  );
};

export default BookList;
