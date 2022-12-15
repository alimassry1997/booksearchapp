import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Global/Footer/footer";
import Navbar from "../../Components/Global/Navbar/navbar";
import capitalizeFirstLetter from "../../Utils/capitalizeFirstLetter";
import Spinner from "../../Components/Global/Spinner/spinner";

import "./book.css";

const Book = ({}) => {
  const { isbn: ISBN_num, id: id } = useParams();

  document.title = "Book | ITXI";
  const canvasRef = useRef();

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const [book, setBook] = useState([]);
  function alertNotFound() {
    alert("could not embed the book!");
  }

  const bookDetail = async (e) => {
    try {
      const data = await axios.get(
        `http://www.googleapis.com/books/v1/volumes/${id}`
      );
      console.log(data.data);
      setBook(data.data.volumeInfo);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "http://www.google.com/books/jsapi.js";
    scriptTag.addEventListener("load", () => setLoaded(true));
    scriptTag.id = "google-script";
    document.body.appendChild(scriptTag);

    bookDetail();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    else {
      if (window.viewer) {
        let viewer = new window.google.books.DefaultViewer(canvasRef.current);

        viewer.load("ISBN:" + ISBN_num, alertNotFound);
      } else {
        window.google.books.load();
        window.google.books.setOnLoadCallback(() => {
          let viewer = new window.google.books.DefaultViewer(canvasRef.current);
          window.viewer = viewer;
          viewer.load(`ISBN:${ISBN_num}`, alertNotFound);
        });
      }
    }
  }, [loaded]);

  if (loading === false) {
    return (
      <div className="book-embed-page">
        <Navbar />
        <div className="whole-book-page">
          <Spinner />
          {loaded ? (
            <div>
              <div ref={canvasRef} id="viewerCanvas"></div>
            </div>
          ) : (
            "Script not loaded"
          )}
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="book-embed-page">
        <Navbar />
        <div className="flex-book">
          <div className="whole-book-page">
            {loaded ? (
              <div>
                <div ref={canvasRef} id="viewerCanvas"></div>
              </div>
            ) : (
              "Script not loaded"
            )}
            <div className="book-infor">
              <div className="box box-down cyan">
                <h2>{book.title}</h2>
                <br />
                <p>
                  <span>Authors</span>:{" "}
                  {book.authors != null ? book.authors : "Undefined"}
                </p>
                <br />
                <p>
                  <span>Publisher</span>:{" "}
                  {book.publisher != null ? book.publisher : "Undefined"}
                </p>
                <br />
                <p>
                  <span>Page Count</span>:{" "}
                  {book.pageCount != null ? book.pageCount : "Undefined"}
                </p>
                <br />
                <p>
                  <span>Language</span>:{" "}
                  {capitalizeFirstLetter(
                    `${book.language != null ? book.language : "Undefined"}`
                  )}
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Book;
