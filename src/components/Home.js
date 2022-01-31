import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import libraryStore from "../LibraryStore";
import BookDisp from "./BookDisp";
import MemberDisp from "./MemberDisp";

const Home = () => {
  const [query, setQuery] = useState("");

  // -----------------------------------books = -------------------------------------------------------:
  const books = libraryStore.bookslist
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        book.author.toLowerCase().includes(query.toLowerCase().trim()) ||
        book.genre.find((gen) =>
          gen.toLowerCase().includes(query.toLowerCase().trim())
        )
    )
    .map((book) => (
      <div className="test b-card">
        <BookDisp key={`b_id_${book.id}`} book={book} />
      </div>
    ));

  // -----------------------------------members = ---------------------------------------------------:
  const members = libraryStore.memberslist
    .filter(
      (member) =>
        member.firstName.toLowerCase().includes(query.toLowerCase().trim()) ||
        member.membership.toLowerCase().includes(query.toLowerCase().trim()) ||
        member.lastName.toLowerCase().includes(query.toLowerCase().trim())
    )
    .map((member) => (
      <div className="test b-card">
        <MemberDisp key={`m_id_${member.id}`} member={member} />
      </div>
    ));
  // ------------------------add books to members--------------------------:
  const searchResult = books.concat(members);

  return (
    <>
      {/* --------------------------background img=----------------- */}
      <img
        className="home-background"
        src={"./homeBackground.jpg"}
        alt="Home img not working."
      />
      {/* --------------------------search bar and home header : -------------- */}
      <div className="column home-layout auto-scolling">
        <div className="column home-header">
          <>Books of Glory</>
          <SearchBar setQuery={setQuery} />
        </div>
        {/* --------------------------members icon button : -----------------------------*/}
        <div className="row-wrap home-links">
          <Link to={"/Members"}>
            <div className="home-cards">
              <img
                className="home-card-logo"
                src={"./images/membersLogo.png"}
                alt="Home img not working."
              />
              <h1 className="home-card-name">Members</h1>
            </div>
          </Link>
          {/* ----------------------books icon button : ----------------------------*/}
          <Link to={"/Books"}>
            <div className="home-cards">
              <img
                className="home-card-logo"
                src={"./images/booksLogo.png"}
                alt="Home img not working."
              />
              <h1 className="home-card-name">Books</h1>
            </div>
          </Link>
        </div>
        {/* ------------------------search display: ------------------------------------- */}
        <div className="search-display">
          {query !== "" && (
            <div className="row-wrap card-layout">{searchResult}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default observer(Home);
