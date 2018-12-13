import React from "react";
import Search from "./search";
import Select from "./select";

const Toolbar = ({ filterName }) => {
  return (
    <div className="Toolbar">
      <Search filterName={filterName} />
      <Select />
    </div>
  );
};

export default Toolbar;
