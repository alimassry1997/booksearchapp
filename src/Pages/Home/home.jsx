import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Global/Footer/footer";
import CardList from "../../Components/Local/Home/Card/card_list";
import Header from "../../Components/Local/Home/Header/header";
import "./home.css";

// https://www.googleapis.com/books/v1/volumes?q=inauthor:Richard&filter=free-ebooks&download=epub&key=AIzaSyA0phPHh3gYfhJr2KnTu7sXBOoSgBMdHuA

const Home = () => {
  document.title = "Home | ITXI";
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  });

  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchAuthorButton = async (e) => {
    try {
      const data = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
          search +
          "&printType=books&download=epub&orderBy=newest&filters=free-ebooks&key=AIzaSyA0phPHh3gYfhJr2KnTu7sXBOoSgBMdHuA"
      );
      const {
        data: { items },
      } = data;
      setBookData(items);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="search-form">
        <div className="container">
          <div className="search-form-content">
            <form className="search-form">
              <div className="search-form-elem flex flex-sb bg-white">
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    searchAuthorButton();
                  }}
                  className="form-control"
                  placeholder="Search for an author..."
                  type="text"
                  // onKeyDown={searchAuthor}
                />
                <button onClick={searchAuthorButton}>Enter</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        {loading ? (
          <CardList book={bookData} search={search} />
        ) : (
          <div className="no-books"></div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
