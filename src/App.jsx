import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="/book/:isbn/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
