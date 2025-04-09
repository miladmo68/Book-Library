import React from "react";
import BookList from "../components/BookList";
import BookSearch from "../components/BookSearch";

const BookLibrary = () => {
  return (
    <div className="flex-col items-center bg-amber-200 w-full min-h-screen p-4">
      <h1 className="text-4xl font-extrabold flex justify-center">
        Book Library
      </h1>
      <BookSearch />
      <BookList />
    </div>
  );
};

export default BookLibrary;
