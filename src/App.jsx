import React, { useState } from "react";
// import "./styles.css";
import "./index.css";
import Header from "./components/Header";
import TabButton from "./components/TabButton";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

const projects = [
  "React Projects",
  "Angular Projects",
  "Asp.Net Projects",
  "Spring Boot Projects",
];
export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [projectTitle, setProjectTitle] = useState();

  const handleSelectedTab = (projectSelected) => {
    setProjectTitle(projectSelected);
  };

  return (
    <div>
      <Header />
      <main>
        <section>
          <div id="tabs">
            <menu>
              <button
                className={activeContentIndex === 0 ? "active" : ""}
                onClick={() => setActiveContentIndex(0)}
              >
                About Joeram?
              </button>
              <button
                className={activeContentIndex === 1 ? "active" : ""}
                onClick={() => setActiveContentIndex(1)}
              >
                Core Features
              </button>
              <button
                className={activeContentIndex === 2 ? "active" : ""}
                onClick={() => setActiveContentIndex(2)}
              >
                Related Resources
              </button>
            </menu>
            <div id="tab-content">
              <ul>
                {content[activeContentIndex].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="examples">
          <h2> GitHub Projects: </h2>
          <menu>
            <TabButton onSelect={() => handleSelectedTab(projects[0])}>
              React
            </TabButton>
            <TabButton onSelect={() => handleSelectedTab(projects[1])}>
              Angular
            </TabButton>
            <TabButton onSelect={() => handleSelectedTab(projects[2])}>
              Asp.Net
            </TabButton>
            <TabButton onSelect={() => handleSelectedTab(projects[3])}>
              Spring Boot
            </TabButton>
          </menu>
          <div id="tab-content">
            {projectTitle == null ? projects[0] : projectTitle}
          </div>
        </section>
      </main>
    </div>
  );
}
