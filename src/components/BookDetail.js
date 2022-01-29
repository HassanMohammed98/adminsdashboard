import React from "react";
import libraryStore from "../LibraryStore";
import { useParams, Navigate } from "react-router-dom";
import Nav from "./Nav";

const BookDetail = () => {
  const { slug } = useParams();
  const book = libraryStore.bookslist.find((book) => book.slug === slug);
  if (!book) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <Nav />
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 m-4">
                    {/* <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    {member.firstName} {}
                  </h2> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <p className="mb-1 m-3">
                      Title : {book.title}
                      <br />
                      Author : {book.author}
                      <br />
                      Genre : {book.genre}
                      <br />
                      Availablity : Book is{" "}
                      {book.available === true ? (
                        <>Available</>
                      ) : (
                        <>not Available</>
                      )}
                      <br />
                      Borrowed History :
                    </p>
                    <div>{book.borrowedBy}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BookDetail;
