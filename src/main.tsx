import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootRouter } from "./routes";
import "./main.css";

export function Main() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(rootRouter)} />
    </>
  );
}
