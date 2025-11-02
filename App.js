const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "header" },
      "This is the header in nested element"
    ),
    React.createElement("h2", { id: "header" }, "This is second header"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
