import Footer from "../../Components/Global/Footer/footer";
import Navbar from "../../Components/Global/Navbar/navbar";
import capitalizeFirstLetter from "../../Utils/capitalizeFirstLetter";

import "./book.css";
import BookService from "./book.service";

const Book = () => {
  const { loaded, book, canvasRef } = BookService();
  document.title = "Book | ITXI";

  return (
    <>
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
    </>
  );
};
export default Book;
