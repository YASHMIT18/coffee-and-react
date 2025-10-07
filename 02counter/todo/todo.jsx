

import React, { useState } from "react";
import "./Todo.css";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]); // ✅ new state

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // ✅ Mark task as completed
  const completeTask = (index) => {
    const taskToMove = tasks[index];
    setCompletedTasks([...completedTasks, taskToMove]); // move to completed
    deleteTask(index); // remove from active list
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>

      {/* Input section */}
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Active tasks */}
      <h2>Pending Tasks</h2>
      <ul className="todo-list">
        {tasks.length === 0 ? (
          <p>No pending tasks 🎉</p>
        ) : (
          tasks.map((t, index) => (
            <li key={index}>
              <span>{t}</span>
              <div>
                <button
                  className="complete"
                  onClick={() => completeTask(index)}
                >
                  ✅
                </button>
                <button
                  className="delete"
                  onClick={() => deleteTask(index)}
                >
                  ✖
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      {/* ✅ Completed tasks */}
      <h2>Completed Tasks</h2>
      <ul className="completed-list">
        {completedTasks.length === 0 ? (
          <p>No completed tasks yet!</p>
        ) : (
          completedTasks.map((t, index) => (
            <li key={index} className="completed">
              <span>{t}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
