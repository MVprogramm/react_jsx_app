import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElem = document.querySelector('#root');

const greetingElem = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);

ReactDOM.render(greetingElem, rootElem);