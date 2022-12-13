import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Global/Navbar/navbar";
import capitalizeFirstLetter from "../../Utils/capitalizeFirstLetter";

import "./book.css";

const Book = ({}) => {
  const { isbn: ISBN_num } = useParams();
  // const ISBN_num = '9781476704210';
  const canvasRef = useRef();

  const [loaded, setLoaded] = useState(false);

  const [book, setBook] = useState([]);
  const [bookLink, setBookLink] = useState([]);
  function alertNotFound() {
    alert("could not embed the book!");
  }

  // const fetchDownload = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
  //         ISBN_num +
  //         "&filters=free-ebooks&key=AIzaSyA0phPHh3gYfhJr2KnTu7sXBOoSgBMdHuA"
  //     );

  //     setBookLink(response.data.items[0].accessInfo);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.google.com/books/jsapi.js";
    scriptTag.addEventListener("load", () => setLoaded(true));
    scriptTag.id = "google-script";
    document.body.appendChild(scriptTag);

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
          ISBN_num +
          "&filters=free-ebooks&key=AIzaSyA0phPHh3gYfhJr2KnTu7sXBOoSgBMdHuA"
      )
      .then((res) => setBook(res.data.items[0].volumeInfo))
      .catch((err) => console.log(err));

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
          ISBN_num +
          "&filters=free-ebooks&key=AIzaSyA0phPHh3gYfhJr2KnTu7sXBOoSgBMdHuA"
      )
      .then((response) => setBookLink(response.data.items[0].accessInfo))
      .catch((err) => console.log(err));

    // fetchDownload();
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

  return (
    <div>
      <Navbar />
      <div className="whole-book-page">
        <div className="book-infor">
          <h1>Book Title: {book.title}</h1>
          {/* <a href={}></a> */}
          {/* <a
            href={
              bookLink.epub.acsTokenLink == undefined
                ? bookLink.pdf.acsTokenLink
                : bookLink.epub.acsTokenLink
            }
          >
            <button>Download</button>
          </a> */}
          <p>Authors: {book.authors}</p>
          <p>Publisher: {book.publisher}</p>
          <p>Page Count: {book.pageCount}</p>
          <p>Language: {capitalizeFirstLetter(`${book.language}`)}</p>
        </div>

        {loaded ? (
          <div>
            <div ref={canvasRef} id="viewerCanvas"></div>
          </div>
        ) : (
          "Script not loaded"
        )}
      </div>
    </div>
  );
};

export default Book;
