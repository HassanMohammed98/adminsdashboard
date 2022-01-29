import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import libraryStore from "../LibraryStore";
import BookDisp from "./BookDisp";
import MemberDisp from "./MemberDisp";

const Home = () => {
  const [query, setQuery] = useState("");
  const books = libraryStore.bookslist
    .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookDisp key={book.id} book={book} />);
  const members = libraryStore.memberslist
    .filter((member) =>
      member.firstName.toLowerCase().includes(query.toLowerCase())
    )
    .map((member) => <MemberDisp key={member.id} member={member} />);
  const searchResult = books.concat(members);
  return (
    <>
      <img
        className="home-background"
        src={"./homeBackground.jpg"}
        alt="Home img not working."
      />
      <div className="column home-layout">
        <div className="column home-header">
          <>Books of Glory</>
          <SearchBar setQuery={setQuery} />
        </div>
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
        <div className="search-display">{query !== "" && searchResult}</div>
      </div>
    </>
  );
};

export default observer(Home);
