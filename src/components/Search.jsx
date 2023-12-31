import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-gray-800 font-extrabold text-5xl mt-3 p-2">Discover a New You in Every Book.</p>
      <p className="text-gray-800 font-extralight mt-1 p-2">
        Explore our curated collection of new and popular books to find your next literary adventure.
      </p>
      <div className="flex flex-row items-center justify-center border border-gray-300 rounded-md bg-white my-3 pr-3 shadow-xl">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded-md w-96 focus:outline-none"
          onFocus={() => setSearchQuery('')}
          onBlur={() => setSearchQuery('Search...')}
        />
        <button onClick={handleSearch} className="cursor-pointer">
          <FiSearch size="1em" />
        </button>
      </div>
    </div>
  );
};

export default Search;
