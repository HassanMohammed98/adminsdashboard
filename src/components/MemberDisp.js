import React from "react";
import { Link } from "react-router-dom";

const MemberDisp = ({ member }) => {
  return (
    <Link to={`/Members/${member.slug}`} style={{ textDecoration: "none" }}>
      <div class="our-team">
        <div class="picture">
          <img
            class="img-fluid"
            src={"/images/memberProfile.png"}
            alt="Member Logo"
          />
        </div>
        <div class="team-content">
          <h3 class="name">
            {member.firstName} {member.lastName}
          </h3>
          <h4
            class={
              member.membership === "gold"
                ? "gold"
                : member.membership === "silver"
                ? "silver"
                : "platinum"
            }
          >
            {member.membership}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default MemberDisp;
