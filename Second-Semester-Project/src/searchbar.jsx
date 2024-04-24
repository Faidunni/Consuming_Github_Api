import { useState } from "react";
// import axios from "axios";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchDate = (value) => {
    fetch("https://api.github.com/users/Faidunni/repos")
      .then((Response) => Response.json())
      .then((json) => {
        const results = json.filter((repos) => {
          return (
            value &&
            repos &&
            repos.name &&
            repos.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchDate(value);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Repo"
          className="search-field"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button onClick={() => onChange(value)}> Search</button>
      </div>
    </div>
  );
  // const [repositories, setRepositories] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   const fetchRepositories = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.github.com/users/Faidunni/repos"
  //       );
  //       setRepositories(response.data);
  //     } catch (error) {
  //       console.error("Error fetching repositories:", error);
  //     }
  //   };

  //   fetchRepositories();
  // }, []);

  // const filteredRepositories = repositories.filter((repo) =>
  //   repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // // const [value, setValue] = useState(" ");
  // // const onChange = (event) => {
  // //   setValue(event.target.value);
  // // };

  // const onSearch = (searchTerm) => {
  //   console.log("search", searchTerm);
  // };

  // return (
  //   <div className="search-container">
  //     <div className="search-bar">
  //       <input
  //         type="text"
  //         name=""
  //         id=""
  //         placeholder="Search Repo"
  //         className="search-field"
  //         value={searchTerm}
  //         onChange={(e) => setSearchTerm(e.target.value)}
  //       />
  //       <button onClick={() => onSearch(searchTerm)}> Search</button>
  //     </div>
  //     {searchTerm && (
  //       <ul className="repository-list">
  //         {filteredRepositories.map((repo) => (
  //           <li key={repo.id}>{repo.name}</li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );
};

export default SearchBar;
