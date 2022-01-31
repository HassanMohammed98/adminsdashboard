import React, { useState } from "react";
import libraryStore from "../LibraryStore";
import MemberDisp from "./MemberDisp";
import { observer } from "mobx-react";
import Nav from "./Nav";

import CreateMemberModal from "./Modal/CreateMemberModal";
import SearchBar from "./SearchBar";

const MembersList = () => {
  const [query, setQuery] = useState("");
  const membersDisplayed = libraryStore.memberslist
    .filter(
      (member) =>
        member.firstName.toLowerCase().includes(query.toLowerCase().trim()) ||
        member.membership.toLowerCase().includes(query.toLowerCase().trim()) ||
        member.lastName.toLowerCase().includes(query.toLowerCase().trim())
    )
    .map((member) => (
      <div className="test m-card">
        <MemberDisp key={member.id} member={member} />
      </div>
    ));
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
          <div className="column">
            <div>
              <div className="inner-search">
                <SearchBar setQuery={setQuery} />
              </div>
              <div className="auto-scolling container-display">
                <div className="row-wrap card-layout">{membersDisplayed}</div>
              </div>
            </div>
            <div className="add-list">
              <CreateMemberModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(MembersList);
