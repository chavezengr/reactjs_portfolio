import React from "react";
import "./styles.css";

export function CourseGoal({ concepts }) {
  return concepts.map((v) => (
    <li key={v.id}>
      <h2>{v.title}</h2>
      <p>{v.description}</p>
    </li>
  ));
}

function Exer1() {
  const concepts = [
    { id: 1, title: "LEARN REACT", description: "In-depth" },
    {
      id: 2,
      title: "PRACTICE Makes Perfect nice",
      description: "Practice working with React, components etc",
    },
  ];

  return (
    <div id="app1" data-testid="app1">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal concepts={concepts} />
      </ul>
    </div>
  );
}

export default Exer1;
