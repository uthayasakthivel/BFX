import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AddTaskForm from "../components/AddTaskForm";
import ViewAllTasks from "../components/ViewAllTasks";
import EditTaskForm from "../components/EditTaskForm";
import "../styles/Todo.css";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // New task add function
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, { ...newTask, id: Date.now().toString() }];
    setTasks(updatedTasks);
    navigate("/view-all-tasks");
  };

  // delete function
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // get edit id of task
  const startEditingTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
    console.log(taskToEdit);
    navigate(`/edit-task/${taskId}`);
  };

  // upate task
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
    navigate("/view-all-tasks");
  };

  return (
    <div className="ToDo">
      <h1>ToDo App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/add-task">Add New Task</Link>
          </li>
          <li>
            <Link to="/view-all-tasks">View All Tasks</Link>
          </li>
          <li>
            <Link to="/medical">Medical</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/add-task" element={<AddTaskForm addTask={addTask} />} />
        <Route
          path="/view-all-tasks"
          element={
            <ViewAllTasks
              tasks={tasks}
              deleteTask={deleteTask}
              startEditingTask={startEditingTask}
            />
          }
        />
        <Route
          path="/edit-task/:id"
          element={<EditTaskForm task={editingTask} updateTask={updateTask} />}
        />
      </Routes>
    </div>
  );
};

export default ToDo;
