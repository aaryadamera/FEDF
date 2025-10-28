  import React, { useState } from "react";
  import "./App.css";

  function App() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
      if (task.trim() === "") return;
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    };

    const toggleComplete = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };

    const deleteTodo = (index) => {
      setTodos(todos.filter((_, i) => i !== index));
    };

    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="add-btn" onClick={addTodo}>
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className={todo.completed ? "completed" : ""}
              onClick={() => toggleComplete(index)}
            >
              {todo.text}
              <button className="delete-btn" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default App;
