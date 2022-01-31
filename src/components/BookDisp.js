import React from "react";
import { Link } from "react-router-dom";

const BookDisp = ({ book }) => {
  return (
    <Link to={`/Books/${book.slug}`}>
      {/* <div>
        <h1>title: {book.title}</h1>
        <h4>author: {book.author}</h4>
      </div> */}
      <div className="card">
        <div className="personal-intro">
          <h4>title: {book.title}</h4>
          <h6>author: {book.author}</h6>
        </div>
      </div>
    </Link>
  );
};

export default BookDisp;
