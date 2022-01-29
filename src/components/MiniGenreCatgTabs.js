import React from "react";

const MiniGenreCatgTabs = ({ removingGenre, tab }) => {
  return (
    <div className="tab">
      <h6 className="genre">{tab}</h6>
      <button
        onClick={() => {
          removingGenre(tab);
        }}
        className="close-tab"
      >
        X
      </button>
    </div>
  );
};

export default MiniGenreCatgTabs;
