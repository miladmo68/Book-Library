import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookItem from "./BookItem";

const BookList = () => {
  const { books, search } = useContext(BookContext);

  // Filter books by title based on search string
  const filteredBooks = search
    ? books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      )
    : books;

  return (
    <div className="container mx-auto py-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookItem key={book.id} book={book} />)
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-full">
            No books found.
          </p>
        )}
      </ul>
    </div>
  );
};

export default BookList;
