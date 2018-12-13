import React from "react";
import Search from "./search";
import Select from "./select";

const Toolbar = ({ filterName, filterState }) => {
  return (
    <div className="Toolbar">
      <table className="toolbar-table">
        <thead>
          <tr>
            <th>
              <label>Search by Name</label>
            </th>
            <th>
              <label>Select by State</label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Search filterName={filterName} />
            </td>
            <td>
              <Select filterState={filterState} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Toolbar;
