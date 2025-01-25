import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
  return (
    <Search
      placeholder={placeholder}
      enterButton="Search"
      onSearch={onSearch}
      style={{ maxWidth: 400 }}
    />
  );
};

export default SearchBar;

//use
{
  /* <SearchBar onSearch={(value) => console.log('Search Value:', value)} /> */
}
