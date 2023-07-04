import React, { useState } from "react";
import "./App.css";
import { ToDoInput } from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [listToDo, setListToDo] = useState([]);
  const addList = (input) => {
    if (input !== "") setListToDo([...listToDo, input]);
  };

  const deleteList = (key) => {
    let newlistTodo = [...listToDo];
    newlistTodo.splice(key, 1);
    setListToDo([...newlistTodo]);
  };

  return (
    <>
      <div>
        <div className="main-container">
          <div className="center-container">
            <ToDoInput addList={addList} />
            <h1 className="app-heading">TODO</h1>
            <hr />
            {listToDo.map((listitem, i) => {
              return <ToDoList key={i} item={listitem} delete={deleteList} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
