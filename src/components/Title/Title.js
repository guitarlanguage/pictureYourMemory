import React from "react";
import "./Title.css";

const Title = props => (
  <nav className="navbar">
    <h1>{props.children}</h1>
    <a className="navbar-brand" href="">
      <img src="" width="30" height="30" alt="" />
    </a>
  </nav>
);

export default Title;
