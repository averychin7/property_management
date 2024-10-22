import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Building from "./routes/BuildingComplexes/index.tsx";
import ResidentRegistration from "./routes/ResidentRegistration/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/buildingForm",
    element: <Building />,
  },
  {
    path: "/residentForm",
    element: <ResidentRegistration />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
