import React from "react";
import Header from "./components/Header";
import "./styles.css";
import Todos from "./components/Todos";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Todos />
      </div>
    );
  }
}
