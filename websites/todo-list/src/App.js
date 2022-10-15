import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => {
            setToDo(e.target.value);
          }}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setToDos([...toDos, { id: Date.now(), text: toDo, status: true }]);
            setToDo("");
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((listToDo) => {
          return (
            <div className="todo" key={listToDo.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    setToDos(
                      toDos.filter((toDoId) => {
                        if (toDoId.id === listToDo.id) {
                          toDoId.status = e.target.checked;
                        }
                        return toDoId;
                      })
                    );
                  }}
                  value={listToDo.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{listToDo.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => {
                    setToDos(
                      toDos.filter((toDoId) => toDoId.id !== listToDo.id)
                    );
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
