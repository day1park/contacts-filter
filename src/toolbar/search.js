import React from "react";

const Search = ({ filterName }) => {
  return (
    <div className="Search">
      <label>Search by Name</label>
      <input
        className="Search"
        type="text"
        onChange={e => {
          filterName(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
