import React from "react";
import libraryStore from "../LibraryStore";
import BookDisp from "./BookDisp";
import { observer } from "mobx-react";
import CreateBookModal from "./Modal/CreateBookModal";
import Nav from "./Nav";

const BooksList = () => {
  const booksDisplayed = libraryStore.bookslist.map((book) => (
    <BookDisp key={book.id} book={book} />
  ));
  return (
    <div>
      <Nav />
      {booksDisplayed}
      <CreateBookModal />
    </div>
  );
};

export default observer(BooksList);
