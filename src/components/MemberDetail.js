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
    .map((book) => <BookDisp key={book.id} book={book} />);
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
              <p className="mb-1 m-3">
                First Name : {member.firstName}
                <br />
                Last Name : {member.lastName}
                <br />
                Membership: {member.membership}
                <br />
                Currently Borrowed Books :
              </p>
              <div>{booksBorrowed}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default MemberDetail;
