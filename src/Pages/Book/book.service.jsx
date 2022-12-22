import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import login from "../Auth/Login/login";

const BookService = () => {
  const { isbn: ISBN_num, id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [book, setBook] = useState([]);
  function alertNotFound() {
    alert("could not embed the book!");
  }

  const bookDetail = async (e) => {
    try {
      const data = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      console.log(data.data);
      setBook(data.data.volumeInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const canvasRef = useRef();

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.google.com/books/jsapi.js";
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
        viewer.load(`ISBN:${ISBN_num}`, alertNotFound);
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

  return { loaded, book, canvasRef };
};

export default BookService;
