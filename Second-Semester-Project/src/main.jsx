import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./header";
import Overview from "./overview";
import ErrPage from "./errPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Repos from "./Repos";
import Repo from "./Repo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
    errorElement: <ErrPage />,
  },
  {
    path: "/repos",
    element: <Repos />,
    errorElement: <ErrPage />,
    children: [
      {
        path: "/repos/:name",
        element: <Repo />,
        errorElement: <ErrPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
