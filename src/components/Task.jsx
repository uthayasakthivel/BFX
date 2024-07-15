import React from "react";
import { Link } from "react-router-dom";

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.date}</td>
      <td>
        <button onClick={onDelete}>Delete</button>
        <Link to={`/edit-task/${task.id}`}>
          <button className="edit-btn" onClick={onEdit}>
            Edit
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Task;
