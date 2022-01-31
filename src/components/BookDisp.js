import React from "react";
import { Link } from "react-router-dom";

const BookDisp = ({ book }) => {
  return (
    // show the book card in this way :
    <Link to={`/Books/${book.slug}`} style={{ textDecoration: "none" }}>
      <div class="our-team">
        <div class="picture">
          <img
            class="img-fluid"
            src={"/images/bookProfile.jpg"}
            alt="Member Logo"
          />
        </div>
        <div class="team-content">
          <h3 class="name">Title: {book.title}</h3>
          <h4 className="title">Author: {book.author}</h4>
        </div>
      </div>
    </Link>
  );
};

export default BookDisp;
