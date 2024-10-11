import { useContext } from 'react';
import { MealsContext } from '../context/MealsContext';
import { MealsContextType } from '../lib/types';

const SearchBar = () => {
  const { search, setSearch } = useContext(MealsContext) as MealsContextType;

  return (
    <input
      className="border px-5 py-3 w-full md:w-3/6 lg:w-2/6 h-16 block my-3 mx-auto rounded-full focus:outline-none focus:shadow-md focus:ring ring-blue-500"
      type="text"
      name="search"
      value={search}
      placeholder="Enter your keyword"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
