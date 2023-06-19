import React from "react";

function ToDoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          onClick={(e) => {
            props.delete(props.index);
          }}
          className="fa-solid fa-trash icon-delete"
        ></i>
      </span>
    </li>
  );
}

export default ToDoList;
