import React from "react";
import libraryStore from "../LibraryStore";
import MemberDisp from "./MemberDisp";
import { observer } from "mobx-react";
import Nav from "./Nav";

import CreateMemberModal from "./Modal/CreateMemberModal";

const MembersList = () => {
  const membersDisplayed = libraryStore.memberslist.map((member) => (
    <MemberDisp key={member.id} member={member} />
  ));
  return (
    <div>
      <Nav />
      {membersDisplayed}

      <CreateMemberModal />
    </div>
  );
};

export default observer(MembersList);
