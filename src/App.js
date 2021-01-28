import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [allTodo, setAllTodo] = useState([]);

  const handleChange = ({ target }) => {
    setTodo(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo) return;
    setAllTodo((prev) => [...prev, todo]);
    setTodo("");
    console.log(allTodo);
  };

  const handleDelete = (targetIndex) => {
    setAllTodo((prev) => prev.filter((todo, index) => index !== targetIndex));
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} />
        <button>Add</button>
        <ol>
          {allTodo.map((todo, index) => (
            <li key={index}>
              <div>
                {todo}
                <button onClick={() => handleDelete(index)}>X</button>
              </div>
            </li>
          ))}
        </ol>
      </form>
    </div>
  );
}
