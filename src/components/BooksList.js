import React, { useState } from "react";
import libraryStore from "../LibraryStore";
import BookDisp from "./BookDisp";
import { observer } from "mobx-react";
import CreateBookModal from "./Modal/CreateBookModal";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

const BooksList = () => {
  const [query, setQuery] = useState("");

  //  show book by book.id------------------------------:
  const booksDisplayed = libraryStore.bookslist
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
        <BookDisp key={book.id} book={book} />
      </div>
    ));

  return (
    <>
      {/* background img:---------------------- */}
      <img
        className="home-background"
        src={"../images/webBackground.jpg"}
        alt="Home img not working."
      />

      <div className="cutoff home-layout ">
        <Nav />
        <div className="row-test">
          <div className="column">
            <div>
              {/* search bar: ----------------------------*/}
              <div className="inner-search">
                <SearchBar setQuery={setQuery} />
              </div>
              {/* books and scroll by them: ------------------------*/}
              <div className="auto-scolling container-display">
                <div className="row-wrap card-layout">{booksDisplayed}</div>
              </div>
            </div>
            <div className="add-list">
              <CreateBookModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(BooksList);
