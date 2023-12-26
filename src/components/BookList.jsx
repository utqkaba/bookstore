// src/components/BookList.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // API'den kitapları çekmek için gerekli endpoint'i kullanın
    axios.get('https://fakestoreapi.com/brands')
      .then(response => {
        setBooks(response.data); // API'den gelen kitap verilerini state'e kaydedin
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []); // Boş dependency array, sadece bir kere çalışmasını sağlar

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Her satırda 3 kitap kartını göstermek için bir grid kullanıyoruz */}
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
