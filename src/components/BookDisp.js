import React from "react";
import { Link } from "react-router-dom";

const BookDisp = ({ book }) => {
  return (
    // show the book card in this way :
    <Link to={`/Books/${book.slug}`}>
      <div className="card-columns ">
        <div className="card">
          <div className=" personal-intro">
            <h4>title: {book.title}</h4>
            <h6>author: {book.author}</h6>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookDisp;
