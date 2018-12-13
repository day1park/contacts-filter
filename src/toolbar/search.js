import React from "react";

const Search = ({ filterName }) => {
  return (
    <div className="Search">
      <input
        className="Search-input"
        type="text"
        onChange={e => {
          filterName(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
