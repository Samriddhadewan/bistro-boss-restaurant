import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={Routes}></RouterProvider>
      </div>
      </HelmetProvider>
  </StrictMode>
);
