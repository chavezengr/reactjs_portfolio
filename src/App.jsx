import React from "react";
// import "./index.css";
import Header from "./components/Header";
import ContainerFirst from "./components/ContainerFirst";
import ContainerSecond from "./components/ContainerSecond";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ContainerFirst />
        <ContainerSecond />
      </main>
    </>
  );
};
export default App;
