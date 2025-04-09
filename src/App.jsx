import React from "react";
import BookLibrary from "./pages/BookLibrary";
import Hearder from "./components/Hearder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookForm from "./components/BookForm";
import FavoriteBooks from "./pages/FavoriteBooks";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" flex flex-col items-center ">
        <Hearder />

        <Routes>
          <Route path="/" element={<BookLibrary />} />
          <Route path="/favorite" element={<FavoriteBooks />} />
          <Route path="/form" element={<BookForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
