import React, { useState } from "react";
import TabButton from "./TabButton";
import { TOPICS } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";
import TabContent from "./TabContent";

const ContainerFirst = () => {
  const projects = ["react", "angular", "asp", "spring"];
  const [selectedTopic, setSelectedTopic] = useState();
  const [ativeSelectedTopic, setActiveSelectedTopic] = useState(projects[0]);

  const handleSelectedTab = (topicSelected) => {
    setSelectedTopic(topicSelected);
    setActiveSelectedTopic(topicSelected);
  };

  const Content = () => {
    return (
      <>
        {!selectedTopic && (
          <div>
            <h2> {TOPICS[projects[0]].title} </h2>
            <p> {TOPICS[projects[0]].description} </p>
          </div>
        )}
        {selectedTopic && (
          <div>
            <h2> {TOPICS[selectedTopic].title} </h2>
            <p> {TOPICS[selectedTopic].description} </p>
          </div>
        )}
      </>
    );
  };

  return (
    <Section id="examples">
      GitHub Projects:
      <Tabs
        buttons={
          <>
            <TabButton
              isActive={ativeSelectedTopic === projects[0]}
              onClick={() => handleSelectedTab(projects[0])}
            >
              React
            </TabButton>
            <TabButton
              isActive={selectedTopic === projects[1]}
              onClick={() => handleSelectedTab(projects[1])}
            >
              Angular
            </TabButton>
            <TabButton
              isActive={selectedTopic === projects[2]}
              onClick={() => handleSelectedTab(projects[2])}
            >
              Asp.Net
            </TabButton>
            <TabButton
              isActive={selectedTopic === projects[3]}
              onClick={() => handleSelectedTab(projects[3])}
            >
              Spring Boot
            </TabButton>
          </>
        }
      >
        <TabContent id="tab-content">
          <Content />
        </TabContent>
      </Tabs>
    </Section>
  );
};

export default ContainerFirst;
