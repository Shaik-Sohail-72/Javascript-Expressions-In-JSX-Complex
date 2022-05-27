//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
var React = require("react");
var ReactDOM = require("react-dom");
const name = "Sohail";
var d = new Date();
var y = d.getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {y}</p>
  </div>,
  document.getElementById("root")
);
