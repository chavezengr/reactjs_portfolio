import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Head
import Header from "./components/Header";
// Body
import Home from "./pages/home/home";
import Contacts from "./pages/contacts/contacts";
import ContactEmail from "./pages/contacts/contact-email";
import ContactInfo from "./pages/contacts/contact-info";
import Projects from "./pages/projects/projects";
// Footer

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  // const [activeContentModeIndex, setActiveContentModeIndex] = useState(0);

  const handleModeButtons = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  const mode = {
    darkMode: darkMode,
    // activeContentModeIndex: activeContentModeIndex,
  };

  let bgValue = "";
  let bgBodyValue = "";

  if (darkMode) {
    bgValue =
      "top-0 h-16 bg-gradient-to-r from-slate-900 to-gray-800 text-slate-200";
    bgBodyValue =
      "w-full h-full bg-gradient-to-r from-slate-800 to-gray-600 text-slate-200";
  } else {
    bgValue =
      "top-0 h-16 bg-gradient-to-r from-slate-400 to-blue-200 text-slate-200";
    bgBodyValue =
      "w-full h-full bg-gradient-to-r from-slate-400 to-gray-700 text-slate-200";
  }

  return (
    <>
      <div className={`sticky top-0 ${bgValue}`}>
        <Header handleModeButtons={handleModeButtons} mode={mode} />
      </div>

      <div className={`${bgBodyValue}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />}>
            <Route path=":contactId" element={<ContactInfo />} />
            <Route index element={<ContactEmail />} />
          </Route>
          <Route path="*" element={<p>Page Not Found!</p>} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default App;
