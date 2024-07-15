import React, { useState } from "react";
import { format } from "date-fns";
import "../styles/Form.css";

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [isTitleTyping, setIsTitleTyping] = useState(false);
  const [isDescriptionTyping, setIsDescriptionTyping] = useState(false);
  const [isDateTyping, setIsDateTyping] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [dateError, setDateError] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setIsTitleTyping(e.target.value.trim().length > 0);
    setTitleError("");
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setIsDescriptionTyping(e.target.value.trim().length > 0);
    setDescriptionError("");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setIsDateTyping(e.target.value.trim().length > 0);
    setDateError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setTitleError("Title is required");
      return;
    }
    if (!description.trim()) {
      setDescriptionError("Description is required");
      return;
    }
    if (!date.trim()) {
      setDateError("Date is required");
      return;
    }
    addTask({ title, description, date });
    setTitle("");
    setDescription("");
    setDate(format(new Date(), "yyyy-MM-dd"));
  };

  return (
    <div className="form-container">
      <h2>Add New Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            // onBlur={() => setIsTitleTyping(title.trim().length > 0)}
            className={isTitleTyping ? "typing" : ""}
          />
          {titleError && <span className="error">{titleError}</span>}
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            className={isDescriptionTyping ? "typing" : ""}
          />
          {descriptionError && (
            <span className="error">{descriptionError}</span>
          )}
        </div>
        <div className="input-group">
          {/* {console.log(format(new Date(), "yyyy-MM-dd"))} */}
          <input
            type="date"
            value={date}
            min={format(new Date(), "yyyy-MM-dd")}
            onChange={handleDateChange}
            onBlur={() => setIsDateTyping(date.trim().length > 0)}
            className={isDateTyping ? "typing" : ""}
          />
          {dateError && <span className="error">{dateError}</span>}
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
