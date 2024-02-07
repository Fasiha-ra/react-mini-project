import React from "react";

const Button = (props) => {
  return <button className btn onClick={props.onSelect}>{props.name}</button>;
};

export default Button;
