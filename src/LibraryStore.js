import members from "./LibraryFE-main/members";
import books from "./LibraryFE-main/books";
import { makeAutoObservable } from "mobx";

class LibraryStore {
  memberslist = members;
  bookslist = books;
  constructor() {
    makeAutoObservable(this);
  }
  // -------------------------- borrowing function-----------------------:
  borrowing = (book, id) => {
    book.available = !book.available;
    book.borrowedBy = [...book.borrowedBy, id];
  };
  // -------------------------- borrowingBook function-----------------------:
  borrowBook = (id, bookID) => {
    this.bookslist.forEach(
      (book) => book.id === bookID && this.borrowing(book, id)
    );
    this.memberslist.forEach((member) => {
      member.id === id &&
        (member.currentlyBorrowedBooks = [
          ...member.currentlyBorrowedBooks,
          bookID,
        ]);
    });
    // console.log(this.bookslist);
    // console.log(this.memberslist);
  };
  // -------------------------- return book function-----------------------:
  returnBook = (id) => {
    this.bookslist.forEach(
      (book) => book.id === id && (book.available = !book.available)
    );
    this.memberslist.forEach((member) => {
      member.currentlyBorrowedBooks = member.currentlyBorrowedBooks.filter(
        (borrowedBooks) => borrowedBooks !== id
      );
    });
    // console.log(this.bookslist);
  };
  // -------------------------- addBook function-----------------------:
  addBook = (book, genres) => {
    let newID;
    if (this.bookslist.length === 0) {
      newID = 1;
    } else {
      newID = this.bookslist[this.bookslist.length - 1].id + 1;
    }
    const genre = genres.map((genArray) => genArray.genre);

    this.bookslist = [
      ...this.bookslist,
      {
        id: newID,
        author: book.author,
        title: book.title,
        slug: book.title.split(" ").join("-"),
        genre: book.genre, //genres,
        available: true,
        borrowedBy: [],
      },
    ];
    // console.log(genre);
  };
  // -------------------------- addMember function-----------------------:
  addMember = (member) => {
    let newID;
    if (this.memberslist.length === 0) {
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
