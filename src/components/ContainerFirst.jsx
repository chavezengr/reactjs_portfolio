import React, { useState } from "react";
import { CONTENT } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import TabContent from "./TabContent";

const ContainerFirst = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const Content = () => {
    return (
      <ul>
        {CONTENT[activeContentIndex].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <Section id="tabs">
      <Tabs
        buttons={
          <>
            <TabButton
              isActive={activeContentIndex === 0}
              onClick={() => setActiveContentIndex(0)}
            >
              About Joeram?
            </TabButton>
            <TabButton
              isActive={activeContentIndex === 1}
              onClick={() => setActiveContentIndex(1)}
            >
              Core Features
            </TabButton>
            <TabButton
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              Related Resources
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
