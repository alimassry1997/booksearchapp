import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Global/Footer/footer";
import CardList from "../../Components/Local/Home/Card/card_list";
import Header from "../../Components/Local/Home/Header/header";
import "./home.css";
import HomeService from "./home.service";

const Home = () => {
  document.title = "Home | ITXI";
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  });
  const { searchAuthorButton, loading, bookData } = HomeService();
  return (
    <div>
      <Header searchAuthorButton={searchAuthorButton} />
      <div>{loading ? <CardList book={bookData} /> : ""}</div>
      <Footer />
    </div>
  );
};

export default Home;
