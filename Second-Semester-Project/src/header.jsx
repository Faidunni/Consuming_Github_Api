import { Link } from "react-router-dom";
import Search from "./search";
// import "../src/";
const Header = () => {
  return (
    <div className="header">
      <h2>Fai Github</h2>

      <Search />

      <ul className="header-menu">
        <li>
          <Link to="/" className="list">
            Home
          </Link>
        </li>
        <li>
          <Link to="/repos" className="list">
            {" "}
            Repo
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
