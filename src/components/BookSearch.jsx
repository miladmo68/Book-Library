import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookSearch = () => {
  const { search, setSearch } = useContext(BookContext);
  return (
    <div className="flex justify-center items-center w-full m-4">
      <form className="bg-white w-80 max-w-md p-4 rounded-2xl shadow-lg flex items-center">
        <input
          type="search"
          name="search"
          placeholder="Search the Book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 text-lg rounded-2xl border-2 border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-gray-400"
        />
      </form>
    </div>
  );
};

export default BookSearch;
