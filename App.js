const heading = React.createElement(
  "h1",
  { id: "headingColor" },
  "hello prakhar from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "childHeading" }, "I am an h1 tag"),
    React.createElement("h2", { id: "childHeading" }, "I am an h2 tag"),
  ])
);
root.render(parent);
