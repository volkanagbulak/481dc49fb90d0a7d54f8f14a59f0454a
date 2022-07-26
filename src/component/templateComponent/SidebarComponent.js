import React from "react";
import SearchComponent from "../sidebarComponent/SearchComponent";

const SidebarComponent = ({ setTextSearch }) => {
  return (
    <div className="col-md-3 col-md-pull-9">
      <SearchComponent onChange={setTextSearch} />
      <div className="clearfix"></div>
    </div>
  );
};

export default SidebarComponent;
