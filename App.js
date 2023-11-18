let root = ReactDOM.createRoot(document.getElementById("root"));

let heading = React.createElement(
  "h1",
  { className: "h1tag", id: "h1", exy: "xyz" },
  " hellow saib this is heading "
);

console.log(heading); // heading react element (means:normal js object)

//creating nesting element

// <div id="parents">

//     <div id="child1">

//         <h1></h1>
//     </div>

//     <div id="child2">

//         <h1></h1>
//     </div>

// </div>

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "this is h1 of child 1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "this is h1 of child 2")
  ),
]);

root.render(parent);
