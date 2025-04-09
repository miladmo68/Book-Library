import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { setBooks } = useContext(BookContext);
  const [id] = useState(Math.random().toString(36).substr(2, 9)); // Random ID
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("read");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before adding the book
    if (!title || !author) {
      alert("Please fill in all fields");
      return;
    }

    const newBook = {
      id,
      title,
      author,
      status,
    };

    // Add the new book to the context
    setBooks((prevBooks) => [newBook, ...prevBooks]);

    // Clear form inputs
    setTitle("");
    setAuthor("");
    setStatus("read");
  };

  return (
    <div className="flex-col items-center bg-amber-200 w-full min-h-screen p-4">
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add a New Book
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition duration-300"
          >
            Add the Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
