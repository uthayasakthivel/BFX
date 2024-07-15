import React from "react";
import Task from "./Task";

const TaskList = ({ filteredTasks, deleteTask, startEditingTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onEdit={() => startEditingTask(task.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
