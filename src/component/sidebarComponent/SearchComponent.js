import React from "react";
import { debounce } from "../../utils/helpers";

const SearchComponent = ({ onChange }) => {
  const onSearch = debounce((text) => onChange(text));

  return (
    <div className="widget col-sm-12">
      <h4>Search</h4>
      <input placeholder="Search" onChange={(e) => onSearch(e.target.value)} className="search--input py-2" />
    </div>
  );
};

export default SearchComponent;
