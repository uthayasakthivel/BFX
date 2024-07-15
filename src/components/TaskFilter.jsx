import React from "react";
import Task from "./Task";
const TaskFilter = ({ tasks, searchTerm }) => {
  // Filter tasks based on title or description with search term
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredTasks.length === 0 ? (
        <p>No results found.</p>
      ) : (
        filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onEdit={() => startEditingTask(task.id)}
          />
        ))
      )}
    </>
  );
};

export default TaskFilter;
