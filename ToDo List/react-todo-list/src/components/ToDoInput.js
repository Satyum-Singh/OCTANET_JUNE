import React, { useState, Fragment } from "react";

export function ToDoInput(props) {
  const [input, setInput] = useState("");

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(input);
      setInput("");
    }
  };

  return (
    <Fragment>
      <div className="input-container">
        <input
          type="text"
          className="input-box-todo"
          placeholder="Enter your next task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={handleEnterPress}
        />
        <button
          className="add-btn"
          onClick={() => {
            props.addList(input);
            setInput("");
          }}
        >
          +
        </button>
      </div>
    </Fragment>
  );
}
