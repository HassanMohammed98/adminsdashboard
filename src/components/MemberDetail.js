import React from "react";
import libraryStore from "../LibraryStore";
import { useParams, Navigate } from "react-router-dom";

const MemberDetail = () => {
  const { slug } = useParams();
  const member = libraryStore.memberslist.find((trip) => trip.slug === slug);
  if (!member) {
    return <Navigate to="/" />;
  } else {
    return (
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
                    First Name : {member.firstName}
                    <br />
                    Last Name : {member.lastName}
                    <br />
                    Membership: {member.membership}
                    <br />
                    Currently Borrowed Books :
                  </p>
                  <div>{member.currentlyBorrowedBooks}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MemberDetail;
