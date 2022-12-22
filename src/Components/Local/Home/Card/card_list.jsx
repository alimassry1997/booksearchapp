import React from "react";
import Placeholder from "../../../../Assets/unavailable-image.jpg";
import Card from "./card";

const CardList = ({ book }) => {
  if (!book || undefined) {
    return (
      <section className="booklist">
        <div className="container">
          <div className="booklist-content">
            <h2 className="no-result">No available books for this author</h2>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="booklist">
        <div className="container">
          <div className="booklist-content grid">
            {book.map((item, index) => {
              let isbn = undefined;
              let thumbnail = Placeholder;
              if (item.volumeInfo.hasOwnProperty("imageLinks")) {
                thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
              }
              let publishedDate = item.volumeInfo.publishedDate;
              let publisherName = item.volumeInfo.publisher;
              let rating = item.volumeInfo.averageRating;
              let ratingCount = item.volumeInfo.ratingsCount;
              let authors = item.volumeInfo.authors;
              let id = item.id;
              if (item.volumeInfo.hasOwnProperty("industryIdentifiers")) {
                isbn =
                  item.volumeInfo.industryIdentifiers[0].identifier == undefined
                    ? item.volumeInfo.industryIdentifiers[1].identifier
                    : item.volumeInfo.industryIdentifiers[0].identifier;
              }
              let downloadLink = item.accessInfo.epub.acsTokenLink;

              return (
                <Card
                  key={index}
                  thumbnail={thumbnail}
                  publishedDate={publishedDate}
                  publisherName={publisherName}
                  rating={rating}
                  ratingCount={ratingCount}
                  authors={authors}
                  isbn={isbn}
                  downloadLink={downloadLink}
                  id={id}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default CardList;
