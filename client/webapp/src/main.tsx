import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Building from "./routes/Building/index.tsx";
import ResidentRegistration from "./routes/ResidentRegistration/index.tsx";
import Complex from "./routes/Complex/index.tsx";

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
  {
    path: "/complexForm",
    element: <Complex />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
