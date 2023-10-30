import React from "react";
import "../index.css";

export default function TabButton({ children, onSelect }) {
  return (
    <>
      <li>
        <button onClick={onSelect}>{children}</button>
      </li>
    </>
  );
}
