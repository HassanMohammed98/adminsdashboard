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
    .filter((member) =>
      member.firstName.toLowerCase().includes(query.toLowerCase())
    )
    .map((member) => <MemberDisp key={member.id} member={member} />);
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
            <div className="inner-search">
              <SearchBar setQuery={setQuery} />
            </div>
            <div className="add-list">
              <CreateMemberModal />
            </div>
            <div className="auto-scolling container-display">
              {membersDisplayed}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(MembersList);
