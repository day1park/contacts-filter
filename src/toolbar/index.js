import React from "react";
import Search from "./search";
import Select from "./select";

const Toolbar = ({ filterName, filterState }) => {
  return (
    <div className="Toolbar">
      <Search filterName={filterName} />
      <Select filterState={filterState} />
    </div>
  );
};

export default Toolbar;
