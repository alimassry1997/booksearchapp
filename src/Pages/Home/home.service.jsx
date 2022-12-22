import { useState } from "react";
import axios from "axios";
import capitalizeFirstLetter from "../../Utils/capitalizeFirstLetter";

const HomeService = () => {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchAuthorButton = async (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    try {
      const data = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:"${capitalizeFirstLetter(
          value
        )}"&maxResults=40&printType=books&download=epub&orderBy=newest&filters=free-ebooks&key=AIzaSyA0phPHh3gYfhJr2KnTu7sXBOoSgBMdHuA`
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

  return { searchAuthorButton, bookData, loading };
};

export default HomeService;
