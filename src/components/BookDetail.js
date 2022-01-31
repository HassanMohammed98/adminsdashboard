import React from "react";
import libraryStore from "../LibraryStore";
import { useParams, Navigate } from "react-router-dom";
import { observer } from "mobx-react";
import Nav from "./Nav";
import MemberDisp from "./MemberDisp";

const BookDetail = () => {
  const { slug } = useParams();
  const book = libraryStore.bookslist.find((book) => book.slug === slug);
  const bookHistory = book.borrowedBy.map((borrower) => {
    let m = libraryStore.memberslist.find((member) => member.id === borrower);
    return <MemberDisp key={m.id} member={m} />;
  });
  const checkMembership = (membership) => {
    if (membership === "silver") {
      return 2;
    } else if (membership === "gold") {
      return 3;
    } else if (membership === "platinum") {
      return 5;
    }
  };
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
  if (!book) {
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
              <div className="mb-1 m-3">
                <p>Title : {book.title}</p>
                <p>Author : {book.author}</p>
                <p>Genre : {book.genre}</p>
                {
                  book.available ? (
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
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => {
                        libraryStore.returnBook(book.id);
                      }}
                    >
                      Return Book
                    </button>
                  )
                  //   <>Available</>
                  // ) : (
                  //   <>not Available</>
                }
              </div>
              <div className="m-5">
                <h5>Borrowed History :</h5>
                {bookHistory}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default observer(BookDetail);
