import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./LandingPage";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap"
      rel="stylesheet"
    ></link>
    <LandingPage />
  </React.StrictMode>
);

