import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskList from "./TaskList";
import TaskSearch from "./TaskSearch";
import "../styles/Table.css";

const ViewAllTasks = ({ tasks, deleteTask, startEditingTask }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // set search value
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <h2>All Tasks</h2>
      <TaskSearch searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <TaskList
        filteredTasks={filteredTasks}
        deleteTask={deleteTask}
        startEditingTask={startEditingTask}
      />
      <Link to="/add-task" className="add-new-task">
        Add New Task
      </Link>
    </div>
  );
};

export default ViewAllTasks;
