import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BookProvider } from "./context/BookContext.jsx";

createRoot(document.getElementById("root")).render(
  <BookProvider>
    <App />
  </BookProvider>
);
