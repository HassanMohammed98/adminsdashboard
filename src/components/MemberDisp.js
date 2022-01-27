import React from "react";
import { Link } from "react-router-dom";

const MemberDisp = ({ member }) => {
  return (
    <Link to={`/Members/${member.slug}`}>
      <div>
        <h1>
          name: {member.firstName} {member.lastName}
        </h1>
        <h4>membership: {member.membership}</h4>
      </div>
    </Link>
  );
};

export default MemberDisp;
