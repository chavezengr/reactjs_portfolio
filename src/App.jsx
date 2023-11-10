import React from "react";
import { Routes, Route } from "react-router-dom";

// route pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import ContactInfo from "./pages/contact-info";
import Project from "./pages/project";
// import ErrorPage from "./pages/error-page";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="personal-project" element={<Project />} />
          <Route path="contacts" element={<Contact />}>
            <Route path=":contactId" element={<ContactInfo />} />
            <Route index element={<p> Select Contacts</p>} />
          </Route>
          <Route path="*" element={<p>Page Not Found!</p>} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </>
  );
};
export default App;
