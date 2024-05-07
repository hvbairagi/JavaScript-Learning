import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Either create react component manually or write jsx
// which will be converted to a react element by babel
// during the build process
const reactElement = createElement(
  "h1",
  { className: "header" },
  "Hello world! react element"
);
const jsx = <h1>Hello world! jsx</h1>;
// get container where we want to render the react app
const container = document.getElementById("root");

// root is a ReactDOM object which is then used to render our react app
const root = createRoot(container);
console.log(root);
// this takes a react element as argument
// root.render(reactElement);
// or jsx, both will work
// root.render(jsx);

root.render(<App />);
