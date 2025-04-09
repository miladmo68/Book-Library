import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookItem = ({ book }) => {
  const { onRemove, onFavorite, favorite, onRemoveFav, onRead, readToggle } =
    useContext(BookContext);
  return (
    <li className="bg-white shadow-md rounded-2xl w-full max-w-sm p-6 flex flex-col items-start hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <h2 className="text-2xl font-bold text-emerald-700 mb-1">{book.title}</h2>
      <p className="text-gray-600 text-md mb-2">
        <strong>Author:</strong> {book.author}
      </p>
      <span
        className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
          book.status === "Read"
            ? "bg-emerald-100 text-emerald-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        <div onClick={() => onRead(book.id)}>{book.status}</div>
      </span>

      <div className="flex w-full  mt-6 justify-between ">
        {favorite.find((fav) => fav.id === book.id) ? (
          <button
            onClick={() => onRemoveFav(book.id)}
            className=" py-2 px-5 bg-red-700 hover:bg-red-600 text-white rounded-full text-sm font-semibold transition duration-300 "
          >
            Remove Favorite
          </button>
        ) : (
          <button
            onClick={() => onFavorite(book)}
            className=" py-2 px-5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full text-sm font-semibold transition duration-300 "
          >
            Add Favorite
          </button>
        )}
        <button
          onClick={() => onRemove(book.id)}
          className=" py-2 px-5 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm font-semibold transition duration-300"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default BookItem;
