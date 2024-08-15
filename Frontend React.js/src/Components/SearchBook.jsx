import React, { useState } from "react";
import BookList from "./BookList";

const SearchBook = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <br></br>

        <input
          style={{ width: "800px", height: "40px", marginLeft: "9%" }}
          id="search"
          className="input"
          type="text"
          role="searchbox"
          placeholder="Search Items"
          value={search}
          onChange={handleSearchChange}
        />
      </form>

      <div>
        <BookList search={search} />
      </div>
    </div>
  );
};

export default SearchBook;
