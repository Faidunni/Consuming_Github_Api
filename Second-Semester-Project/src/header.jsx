import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
// import "../src/";
const Header = () => {
  return (
    <div className="header">
      <h2>Fai Github</h2>
      <SearchBar />
      {/* <div className="search">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search Repo"
          className="search-field"
        />
      </div> */}
      <ul className="header-menu">
        <li>
          <Link to="/" className="list">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/repos" className="list">
            {" "}
            Repositories
          </Link>
        </li>
        <li>
          <Link to="/create" className="list">
            {" "}
            Create
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
