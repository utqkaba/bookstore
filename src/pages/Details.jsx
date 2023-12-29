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
    axios.get("https://www.googleapis.com/books/v1/volumes?q=react&filter=ebooks&key=AIzaSyBOYuYNIW3OSKWicmtfJ_UPfAAIlJdNFtE")
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
          books.map((item, index) => {
            const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            const amount = item.saleInfo.listPrice.amount;
            const buyLink = item.saleInfo.buyLink;
            const desc = item.volumeInfo.description;
            const authors = item.volumeInfo.authors;
            const pageCount = item.volumeInfo.pageCount;
            const categories = item.volumeInfo.categories;
            const publisher = item.volumeInfo.publisher;
            const publishedDate = item.volumeInfo.publishedDate;

            if (thumbnail != undefined && amount != undefined) {
              return (
                <div key={index}>
                  <img className="h-64 w-64" src={thumbnail} alt={item.volumeInfo.title} />
                  <div className="border-4 font-extralight border-red-500 p-4 m-4">
                    <p className="text-3xl font-lights"> {item.volumeInfo.title} </p>
                    <p> <strong>Authors:</strong> {authors == null ? "Unknown" : authors} </p>
                    <p> <strong>Publisher:</strong> {publisher == null ? "Unknown" : publisher} </p>
                    <p> <strong>Published Date:</strong> {publishedDate == null ? "Unknown" : publishedDate} </p>
                    <p> <strong>Page Count:</strong> {pageCount == null ? "Unknown" : pageCount} </p>
                    <p> <strong>Categories:</strong> {categories == null ? "Unknown" : categories} </p>
                    <p> <strong>Price:</strong> ${amount} </p>
                    <a href={buyLink} target="_blank" rel="noreferrer"> <strong>Buy Link:</strong> {buyLink} </a>
                    <p> <strong>Description:</strong> {desc} </p>
                  </div>
                </div>
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
