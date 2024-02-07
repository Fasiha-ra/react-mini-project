import React from "react";
import { ItemStyle } from "./Todo.styles";

const TodoItem = (props) => {
  return (
    <>
      <ItemStyle>
         <i
            className="fa-solid fa-xmark"
            onClick={() => {
              props.onSelect(props.id);
            }}
          ></i>
          <li>{props.itemValue}</li>
      
      </ItemStyle>
    </>
  );
}; 

export default TodoItem;
