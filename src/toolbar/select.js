import React from "react";

const Select = () => {
  return (
    <div className="Select">
      <label>Select by State</label>
      <select className="Select" type="text">
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
