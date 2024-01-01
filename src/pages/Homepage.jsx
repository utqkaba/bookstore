import BookList from "../components/Booklist"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Search from "../components/Search"
import PromoBar from "../components/PromoBar"
import { useState } from 'react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Search onSearch={handleSearch} />
      <PromoBar />
      <BookList searchQuery={searchQuery} />
      <Footer />
    </div>
  )
}