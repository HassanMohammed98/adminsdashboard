import React from "react";
import { Link } from "react-router-dom";

const MemberDisp = ({ member }) => {
  return (
    <Link to={`/Members/${member.slug}`}>
      {/* <div>
        <h1>
          name: {member.firstName} {member.lastName}
        </h1>
        <h4>membership: {member.membership}</h4>
      </div> */}

      <div className="card front">
        <div className="personal-intro">
          <h3>
            {member.firstName} {member.lastName}
          </h3>
          <h6>membership: {member.membership}</h6>
        </div>
      </div>
    </Link>
  );
};

export default MemberDisp;
