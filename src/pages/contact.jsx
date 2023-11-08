import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1> Contact Page </h1>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/contacts/email"
          >
            contact me through email
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/contacts/facebook"
          >
            contact me through facebook
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Contact;
