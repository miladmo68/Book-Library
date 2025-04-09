import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const Header = () => {
  const { favorite } = useContext(BookContext);
  return (
    <div className="bg-emerald-600 w-full flex items-center p-4 shadow-lg">
      <NavLink to="/">
        <h1 className="flex text-4xl font-bold text-amber-300 justify-start mr-6">
          Book Library
        </h1>
      </NavLink>
      <div className="flex ml-auto space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-amber-500 px-4 py-2 rounded-full shadow-md"
              : "text-white hover:bg-amber-300 hover:text-black px-4 py-2 rounded-full transition-all"
          }
        >
          Library
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-amber-500 px-4 py-2 rounded-full shadow-md"
              : "text-white hover:bg-amber-300 hover:text-black px-4 py-2 rounded-full transition-all"
          }
        >
          Form
        </NavLink>
        <NavLink
          to="/favorite"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-amber-500 px-4 py-2 rounded-full shadow-md"
              : "text-white hover:bg-amber-300 hover:text-black px-4 py-2 rounded-full transition-all"
          }
        >
          Favorite ({favorite.length})
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
