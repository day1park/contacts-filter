import React from "react";

const Select = ({ filterState }) => {
  return (
    <div className="Select">
      <select
        className="Select-option"
        onChange={e => {
          filterState(e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="NSW">NSW</option>
        <option value="Victoria">Victoria</option>
        <option value="QLD">QLD</option>
        <option value="South Australia">South Australia</option>
        <option value="Washington State">Washington State</option>
        <option value="New York">New York</option>
        <option value="California">California</option>
      </select>
    </div>
  );
};

export default Select;
