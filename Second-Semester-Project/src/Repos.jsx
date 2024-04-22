import Header from "./header";
import useFetch from "./component/usefetch";
import { Link, Outlet } from "react-router-dom";

const Repos = () => {
  const { data, isPending, error } = useFetch(
    "https://api.github.com/users/Faidunni/repos"
  );
  console.log(data);
  return (
    <div className="repos">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      {error && <div> {error} </div>}
      {isPending && <div> Loading... </div>}
      <div className="repos-class">
        {data &&
          data.map((repo) => (
            <div key={repo.name} className="repos-repo">
              <Link className={"link"} to={"/repos/" + repo.name}>
                <h3>{repo.name}</h3>
                {repo.description
                  ? repo.description
                  : "No description  for this repo."}
                <p className="visibility">Visibility: {repo.visibility}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Repos;
