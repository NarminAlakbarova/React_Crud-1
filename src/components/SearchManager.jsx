import React from "react";

const SearchManager = ({ setSearchManager }) => {
  return (
    <div className="container d-flex justify-content-center">
      <input
        className="search-inp"
        type="search"
        placeholder="Search here..."
        onChange={(e) => setSearchManager(e.target.value)}
      />
    </div>
  );
};

export default SearchManager;
