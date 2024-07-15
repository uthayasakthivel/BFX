// TaskSearch.js
import React from "react";

const TaskSearch = ({ searchTerm, onSearchChange }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        className="search-task"
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default TaskSearch;
