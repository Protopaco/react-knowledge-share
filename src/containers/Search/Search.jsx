import React, { useState } from "react";
import "./Search.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import DisplayModule from "../../components/DisplayModule/DisplayModule";
import Title from "../../components/Title/Title";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (input) => {
    setSearchResults(input);
  };

  return (
    <div className="page-root">
      <Title text={"SEARCH FOR A NAME!"} />
      <SearchForm handleSearchResults={handleSearchResults} />
      {searchResults.length > 0 && (
        <DisplayModule searchResults={searchResults} />
      )}
    </div>
  );
}
