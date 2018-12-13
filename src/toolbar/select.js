import React from "react";

const Select = ({ filterState }) => {
  return (
    <div className="Select">
      <label>Select by State</label>
      <select
        className="Select"
        onChange={e => {
          filterState(e.target.value);
        }}
      >
        <option>NSW</option>
        <option>Victoria</option>
        <option>QLD</option>
        <option>South Australia</option>
        <option>Washington State</option>
        <option>New York</option>
      </select>
    </div>
  );
};

export default Select;
