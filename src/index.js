import React from "react";
import ReactDOM from "react-dom";

const fName = "Veronika";
const lName = "Vertlina";
const year = new Date();

ReactDOM.render(
  <div>
    <footer>
      <p>Created by {fName + " " + lName}.</p>
      <p>Copyright &copy; {year.getFullYear()}.</p>
    </footer>
  </div>,
  document.getElementById("root")
);
