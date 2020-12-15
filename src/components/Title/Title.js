import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
}

export default Title;
