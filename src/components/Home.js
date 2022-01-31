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
    .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookDisp key={`b_id_${book.id}`} book={book} />);

  // -----------------------------------members = ---------------------------------------------------:
  const members = libraryStore.memberslist
    .filter((member) =>
      member.firstName.toLowerCase().includes(query.toLowerCase())
    )
    .map((member) => <MemberDisp key={`m_id_${member.id}`} member={member} />);
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
        <div className="search-display">{query !== "" && searchResult}</div>
      </div>
    </>
  );
};

export default observer(Home);
