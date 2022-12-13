import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/Login/login";
import Book from "./Pages/Book/book";
import Home from "./Pages/Home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:isbn" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );

  // Accomazzo Anthony  // Juha Hinkula
  // https://www.googleapis.com/books/v1/volumes?q=inauthor:Richard&filter=free-ebooks&key=AIzaSyA0phPHh3gYfhJr2KnTu7sXBOoSgBMdHuA
  // api key AIzaSyA0phPHh3gYfhJr2KnTu7sXBOoSgBMdHuA

  // https://www.googleapis.com/books/v1/volumes?q=inauthor:Richard&key=AIzaSyA0phPHh3gYfhJr2KnTu7sXBOoSgBMdHuA heeda fee rating
}
// client id for login 263195036232-g3qf5nhs7s3pfh7e126cbeio6g86881h.apps.googleusercontent.com
// client secret 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
export default App;
