import React from "react";
import libraryStore from "../LibraryStore";
import { useParams, Navigate } from "react-router-dom";
import Nav from "./Nav";
import BookDisp from "./BookDisp";

const MemberDetail = () => {
  const { slug } = useParams();
  const member = libraryStore.memberslist.find(
    (member) => member.slug === slug
  );
  const booksBorrowed = libraryStore.bookslist
    .filter((book) => member.currentlyBorrowedBooks.includes(book.id))
    .map((book) => (
      <div className="test m-card">
        <BookDisp key={book.id} book={book} />
      </div>
    ));
  if (!member) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <img
          className="home-background"
          src={"../images/webBackground.jpg"}
          alt="Home img not working."
        />
        <div className="cutoff home-layout">
          <Nav />
          <div className="row-test">
            <div className="auto-scolling container-display">
              <div className="detail mb-1 m-3">
                <p>
                  <u>First Name :</u> {member.firstName}
                </p>
                <p>
                  <u>Last Name :</u> {member.lastName}
                </p>
                <p>
                  <u>Membership:</u> {member.membership}
                </p>
                <p>Currently Borrowed Books :</p>
              </div>
              <div className="row-wrap card-layout">{booksBorrowed}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default MemberDetail;
