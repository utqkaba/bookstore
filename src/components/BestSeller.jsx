import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const BestSeller = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=bestSeller&filter=paid-ebooks&key=AIzaSyBOYuYNIW3OSKWicmtfJ_UPfAAIlJdNFtE")
      .then(response => { setBooks(response.data.items) })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const bestSellerBooks = books.slice(0, 3);

  return (
    <div>
      <p className='grid text-center bg-gray-900 text-white font-extrabold text-3xl pt-6'>Best Seller</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 mb-4 text-white bg-gray-900">
        {
          bestSellerBooks.map((item, index) => {
            const thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
            const amount = item.saleInfo.listPrice.amount;
            const authors = item.volumeInfo.authors;

            if (thumbnail != undefined && amount != undefined) {
              return (
                <div key={index} >
                  <div className="border p-4 font-extralight rounded-md">
                    <div className="flex justify-center p-4 ">
                      <img className="h-44 w-36" src={thumbnail} alt={item.volumeInfo.title} />
                    </div>
                    <p className="text-3xl font-lights"> {item.volumeInfo.title} </p>
                    <p> <strong>Authors:</strong> {authors == null ? "Unknown" : authors} </p>
                    <p> <strong>Price:</strong> ${amount} </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 text-center gap-4 p-2'>
                      <Link to="/Details" className="bg-gray-800 text-white font-extralight px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 hover:scale-105 duration-500">
                        Details
                      </Link>
                      <Link to="/Details" className="bg-gray-300 text-gray-800 font-extralight px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white hover:scale-105 duration-500">
                        Buy
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }

          })
        }
      </div>
    </div>
  );
};

export default BestSeller;
