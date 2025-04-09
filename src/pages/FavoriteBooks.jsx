import React, { useContext } from "react";
import FavoriteBook from "../components/FavoriteBook";
import { BookContext } from "../context/BookContext";

const FavoriteBooks = () => {
  const { favorite } = useContext(BookContext);
  return (
    <div className="flex-col items-center bg-amber-200 w-full min-h-screen p-4">
      <h1 className="text-4xl font-extrabold flex justify-center mb-6">
        Favorite Books
      </h1>
      <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {favorite.map((fBook) => (
          <FavoriteBook key={fBook.id} fBook={fBook} />
        ))}
      </ul>
    </div>
  );
};

export default FavoriteBooks;
