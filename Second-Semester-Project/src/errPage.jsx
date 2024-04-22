import { Link, useRouteError } from "react-router-dom";
import Header from "./header";

const ErrPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Header />
      {error.status} : {error.statusText}
      <p>{error.data}</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default ErrPage;
