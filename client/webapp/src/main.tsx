import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import BuildingComplex from "./routes/BuildingComplexes/index.tsx";
import AllComplexes from "./routes/BuildingComplexes/AllComplexes.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/buildingComplex",
    element: <BuildingComplex />,
  },
  {
    path: "/allComplexes",
    element: <AllComplexes />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
