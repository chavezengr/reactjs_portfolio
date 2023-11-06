import React from "react";
import "./index.css";
import "./styles.css";
import Header from "./components/Header";
import ContainerFirst from "./components/ContainerFirst";
import ContainerSecond from "./components/ContainerSecond";
import TickTacToe from "./exercises/TickTacToe/index.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ContainerFirst />
        <ContainerSecond />
        <TickTacToe />
      </main>
    </>
  );
};
export default App;
