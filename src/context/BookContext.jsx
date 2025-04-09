import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const defaultBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      status: "Read",
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      status: "Unread",
    },
    {
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      status: "Read",
    },
    {
      id: 4,
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "Unread",
    },
    {
      id: 5,
      title: "1984",
      author: "George Orwell",
      status: "Read",
    },
    {
      id: 6,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      status: "Unread",
    },
  ];

  const [books, setBooks] = useState(defaultBooks);
  const [search, setSearch] = useState("");
  const [favorite, setfavorite] = useState([]);
  const [readToggle, setReadToggle] = useState("Read");

  function onRemove(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  function onFavorite(book) {
    setfavorite([book, ...favorite]);
  }

  function onRemoveFav(id) {
    setfavorite(favorite.filter((fav) => fav.id !== id));
  }
  // console.log(search);

  function onRead(id) {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "Read" ? "Unread" : "Read" }
          : book
      )
    );
  }
  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        onRemove,
        favorite,
        onFavorite,
        onRemoveFav,
        search,
        setSearch,
        readToggle,
        setReadToggle,
        onRead,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
