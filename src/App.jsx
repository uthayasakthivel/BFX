import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDo from "./Pages/Todo";
import Medical from "./Pages/Medical";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<ToDo />} />
          <Route path="/medical" element={<Medical />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
