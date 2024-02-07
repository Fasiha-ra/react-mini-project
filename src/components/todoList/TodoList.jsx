import React, { useState } from "react";
import { Todo } from "./Todo.styles";
import TodoItem from "./TodoItem";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";

const TodoList = () => {
  const [items, setItems] = useState("");
  const [showItem, setShowItem] = useState([]);

  // input Field
  const changeHandler = (event) => {
    console.log(event.target.value);
    setItems(event.target.value);
  };
  //   Button
  const clickHandler = () => {
    console.log("clicked");
    if (!items) return;
    setShowItem((allItem) => {
      return [...allItem, items];
    });
    setItems("");
  };
  //   Delete button
  const deleteItem = (id) => {
    console.log("deleted");
    setShowItem((allItem) => {
      return allItem.filter((elem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Todo>
        <div className="todo">
          <h1 className="heading">ToDo List</h1>
          <input
            type="text"
            placeholder="Add an Items"
            value={items}
            onChange={changeHandler}
          />
          <button onClick={clickHandler}>{<FaPlus />} </button>
          <ul>
            {  showItem.map((value, i) => {
              return (
                <TodoItem
                  key={i}
                  id={i}
                  itemValue={value}
                  onSelect={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </Todo>
    </>
  );
};
export default TodoList;
