import React from "react";
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
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />}>
            <Route path=":contactId" element={<ContactInfo />} />
            <Route index element={<ContactEmail />} />
          </Route>
          <Route path="*" element={<p>Page Not Found!</p>} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </>
  );
};
export default App;
