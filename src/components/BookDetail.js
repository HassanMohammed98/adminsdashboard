import React from "react";
import libraryStore from "../LibraryStore";
import { useParams, Navigate } from "react-router-dom";
import { observer } from "mobx-react";
import Nav from "./Nav";
import MemberDisp from "./MemberDisp";

const BookDetail = () => {
  // take the slag from routing-------------------:
  const { slug } = useParams();

  // find the book = the slag in the data  -----------------------:
  const book = libraryStore.bookslist.find((book) => book.slug === slug);

  // map and find by id the member and display it in memberDisp------------:
  const bookHistory = book.borrowedBy.map((borrower) => {
    let m = libraryStore.memberslist.find((member) => member.id === borrower);
    return (
      <div className="test b-card">
        <MemberDisp key={m.id} member={m} />
      </div>
    );
  });
  // checking membership && numbers of books---------------:
  const checkMembership = (membership) => {
    if (membership === "silver") {
      return 2;
    } else if (membership === "gold") {
      return 3;
    } else if (membership === "platinum") {
      return 5;
    }
  };
  // ----------------------------------------------------
  // add borrow member by onClick ---------------------:
  const membersBorrow = libraryStore.memberslist
    .filter(
      (member) =>
        +member.currentlyBorrowedBooks.length <
        +checkMembership(member.membership)
    )
    .map((member) => (
      <li
        key={member.id}
        onClick={() => {
          libraryStore.borrowBook(member.id, book.id);
        }}
      >
        <span className="dropdown-item">
          {member.firstName} {member.lastName}
        </span>
      </li>
    ));
  // -----------------------------------------------
  //  if book false go home:----------------------------
  if (!book) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        {/* background img */}
        <img
          className="home-background"
          src={"../images/webBackground.jpg"}
          alt="Home img not working."
        />
        {/* home layout and the card container */}
        <div className="cutoff home-layout">
          <Nav />
          <div className="row-test">
            <div className="auto-scolling container-display">
              <div className="detail mb-1 m-3">
                <p>
                  <u>Title :</u> {book.title}
                </p>
                <p>
                  <u>Author :</u> {book.author}
                </p>
                <p>
                  <u>Genre :</u> {book.genre}
                </p>
                {/* if so show the available button: --------------------*/}
                {book.available ? (
                  <div className="btn-group">
                    <div className="borrow-label">Borrow Book : </div>
                    <button
                      type="button"
                      className="btn btn-info dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Members
                    </button>
                    <ul className="dropdown-menu">{membersBorrow}</ul>
                  </div>
                ) : (
                  /*  show the return book button:---------------------*/
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => {
                      libraryStore.returnBook(book.id);
                    }}
                  >
                    Return Book
                  </button>
                )}
              </div>
              {/* show book History */}
              <div className="m-5">
                <h5 className="detail">Borrowed History :</h5>
                <div className="row-wrap card-layout">{bookHistory}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default observer(BookDetail);
