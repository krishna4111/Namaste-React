import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "header", key: "h1" },
      "This is the header in nested element"
    ),
    React.createElement(
      "h2",
      { id: "header", key: "h2" },
      "This is second header"
    ),
  ])
);

const root = createRoot(document.getElementById("root"));

root.render(parent);
