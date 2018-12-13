import React from "react";
import Search from "./search";
import Select from "./select";

const Toolbar = () => {
  return (
    <div className="Toolbar">
      <Search />
      <Select />
    </div>
  );
};

export default Toolbar;
