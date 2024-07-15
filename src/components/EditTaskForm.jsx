import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import "../styles/Form.css";

const EditTaskForm = ({ task, updateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isTitleTyping, setIsTitleTyping] = useState(false);
  const [isDescriptionTyping, setIsDescriptionTyping] = useState(false);
  const [isDateTyping, setIsDateTyping] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // console.log("Task prop changed:", task);
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDate(task.date);
    }
  }, [task]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setIsTitleTyping(e.target.value.trim().length > 0);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setIsDescriptionTyping(e.target.value.trim().length > 0);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setIsDateTyping(e.target.value.trim().length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !date.trim()) {
      alert("Please fill out all fields.");
      return;
    }
    updateTask({ id, title, description, date });
    navigate("/view-all-tasks");
  };

  return (
    <div className="form-container">
      <h2>Edit Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          onBlur={() => setIsTitleTyping(title.trim().length > 0)}
          className={isTitleTyping ? "typing" : ""}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          onBlur={() => setIsDescriptionTyping(description.trim().length > 0)}
          className={isDescriptionTyping ? "typing" : ""}
          required
        />
        <input
          type="date"
          value={date}
          min={format(new Date(), "yyyy-MM-dd")}
          onChange={handleDateChange}
          onBlur={() => setIsDateTyping(date.trim().length > 0)}
          className={isDateTyping ? "typing" : ""}
          required
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTaskForm;
