import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const FavoriteBook = ({ fBook }) => {
  const { onRemoveFav } = useContext(BookContext);
  if (!fBook) {
    return <p>Book data is unavailable.</p>; // or some other fallback UI
  }
  return (
    <li className="bg-white shadow-md rounded-2xl w-full max-w-sm p-6 flex flex-col items-start hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <h2 className="text-2xl font-bold text-emerald-700 mb-1">
        {fBook.title}
      </h2>
      <p className="text-gray-600 text-md mb-2">
        <strong>Author:</strong> {fBook.author}
      </p>
      <span
        className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
          fBook.status === "Read"
            ? "bg-emerald-100 text-emerald-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {fBook.status}
      </span>

      <div className="flex w-full gap-4 mt-6 justify-between ">
        <button
          onClick={() => onRemoveFav(fBook.id)}
          className=" py-2 px-5 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm font-semibold transition duration-300"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default FavoriteBook;
