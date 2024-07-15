import React from "react";
import Header from "../components/Header";
import Home from "./Home";
import "../styles/Medical.css";
const Medical = () => {
  return (
    <main className="medical__wrapper flex flex__column gap1">
      <Header />
      <Home />
    </main>
  );
};

export default Medical;
