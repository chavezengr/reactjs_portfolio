import React from "react";
import "../styles.css";
import imgProfile from "../assets/id.jpg";

const reactDescriptions = ["Fundamentals", "Crusial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={imgProfile} alt="React logo" />
      <div>
        <h1>React.js</h1>
        <p>
          {reactDescriptions[getRandomInt(1)]} i.e., using the React library for
          rendering the UI
        </p>
      </div>
    </header>
  );
}