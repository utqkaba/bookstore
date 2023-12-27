import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Details = () => {
  const [books, setBooks] = useState([]);
  // secilen kitabin idsi prop olarak gelicek ona gore istek aticaz. 
  // const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers&filter=paid-ebooks&key=AIzaSyBOYuYNIW3OSKWicmtfJ_UPfAAIlJdNFtE")
      .then((response) => setBooks(response.data.items))
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
      <div className="flex flex-col items-center justify-center m-4 p-4">
        {
          books.map((item) => {
            const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            const amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            const desc = item.volumeInfo.description;
            const authors = item.volumeInfo.authors;
            const publisher = item.volumeInfo.publisher;
            const publishedDate = item.volumeInfo.publishedDate;

            publisher
            if (thumbnail != undefined && amount != undefined) {
              return (
                <>
                  <div>
                    <img className="h-64 w-64" src={thumbnail} alt="BookImage" />
                    <div className="border-4 border-red-500 p-4 m-4">
                      <h3 className="text-2xl font-bold"> {item.volumeInfo.title} </h3>
                      <p> <strong>Authors:</strong> {authors} </p>
                      <p> <strong>Publisher:</strong> {publisher} </p>
                      <p> <strong>Published Date:</strong> {publishedDate} </p>
                      <p> <strong>Description:</strong> {desc} </p>
                      <p> <strong>Price:</strong> ${amount} </p>
                    </div>
                  </div>
                </>
              )
            }

          })
        }
      </div>
      <Footer />
    </div>
  );
};

export default Details;
