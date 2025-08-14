import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "childHeading", key: "childHeading" },
      "I am an h1 tag"
    ),
    React.createElement("h2", { key: "childHeading2" }, "I am an h2 tag"),
  ])
);

const root = createRoot(document.getElementById("root"));
root.render(parent);
