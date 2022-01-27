import React from "react";
import members from "./LibraryFE-main/members";
import books from "./LibraryFE-main/books";
import { makeAutoObservable } from "mobx";

class LibraryStore {
  memberslist = members;
  bookslist = books;
  constructor() {
    makeAutoObservable(this);
  }
  addBook = (book) => {
    let newID;
    if (this.bookslist.length == 0) {
      newID = 1;
    } else {
      newID = this.bookslist[this.bookslist.length - 1].id + 1;
    }
    this.bookslist = [
      ...this.bookslist,
      {
        id: newID,
        author: book.author,
        title: book.title,
        slug: book.title.split(" ").join("-"),
        genre: book.genre,
        available: true,
        borrowedBy: [],
      },
    ];

    // console.log(this.memberslist);
  };
  addMember = (member) => {
    let newID;
    if (this.memberslist.length == 0) {
      newID = 1;
    } else {
      newID = this.memberslist[this.memberslist.length - 1].id + 1;
    }
    this.memberslist = [
      ...this.memberslist,
      {
        id: newID,
        firstName: member.firstName,
        lastName: member.lastName,
        slug: member.firstName
          .split(" ")
          .join("")
          .concat("-", member.lastName.split(" ").join(""))
          .toLowerCase(),
        currentlyBorrowedBooks: [],
        membership: member.membership,
      },
    ];

    // console.log(this.memberslist);
  };
}

const libraryStore = new LibraryStore();
export default libraryStore;
