import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import Unavailable from "../../../../Assets/unavailable-image.jpg";
import { FaRegStarHalf, FaRegStar } from "react-icons/fa";
import { FcDownload } from "react-icons/fc";

const Card = ({
  thumbnail,
  publishedDate,
  publisherName,
  rating,
  ratingCount,
  authors,
  isbn,
  downloadLink,
  id,
}) => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <Link to={`/book/${isbn}/${id}`}>
        <div className="book-item-img">
          <img
            src={thumbnail == undefined ? Unavailable : thumbnail}
            alt="cover"
          />
        </div>

        <div className="book-item-info text-center">
          {/* <Link to = {`/book/${book.id}`} {...book}> */}
          <div className="book-item-info-item title fw-7 fs-18">
            <span>Publisher: </span>
            <br />
            <span>
              {publisherName == undefined ? "Unknown" : publisherName}
            </span>
          </div>

          <div className="book-item-info-item author fs-15">
            <span className="text-capitalize fw-7">Author: </span>
            <br />
            <span>{authors == undefined ? "Unknown" : authors}</span>
          </div>

          <div className="book-item-info-item edition-count fs-15">
            <span className="text-capitalize fw-7">
              Publish Date:{" "}
              {publishedDate == undefined ? "Unknown" : publishedDate}
            </span>
          </div>

          <div className="book-item-info-item publish-year fs-15">
            <span className="text-capitalize fw-7">Rating:</span>
            <br />
            <span>
              {rating == undefined ? (
                "Unknown"
              ) : rating == 0.5 ? (
                <FaRegStarHalf />
              ) : rating == 1 ? (
                <FaRegStar />
              ) : rating == 1.5 ? (
                <div>
                  <FaRegStar />
                  <FaRegStarHalf />
                </div>
              ) : rating == 2 ? (
                <div>
                  <FaRegStar />
                  <FaRegStar />
                </div>
              ) : rating == 2.5 ? (
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStarHalf />
                </div>
              ) : rating == 3 ? (
                <div>
                  <FaRegStar />
                  <FaRegStar /> <FaRegStar />
                </div>
              ) : rating == 3.5 ? (
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStarHalf />
                </div>
              ) : rating == 4 ? (
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              ) : rating == 4.5 ? (
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStarHalf />
                </div>
              ) : rating == 5 ? (
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              ) : (
                rating
              )}
            </span>
          </div>
          <div className="book-item-info-item publish-year fs-15">
            <span className="text-capitalize fw-7">Number of Rating:</span>
            <br />
            <span>{ratingCount == undefined ? "Unknown" : ratingCount}</span>
          </div>

          {/* <button>Check</button> */}
        </div>
      </Link>

      <div className="book-item-info-item publish-year fs-15">
        <a href={downloadLink}>
          <FcDownload size={35} />
        </a>
        {/* {downloadLink == undefined ? <div></div> : <a href={downloadLink}><FcDownload size={35}/></a>} */}
      </div>
    </div>
  );
};

export default Card;
