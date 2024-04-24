import { useState } from "react";
import SearchBar from "./searchbar";

function Search() {
  const [results, setResults] = useState([]);
  return (
    <div className="searchbar">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <div>SearchResults</div>
      </div>
    </div>
  );
}

export default Search;
