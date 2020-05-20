import React from "react";
import "./App.css";
import AppNav from "./components/layout/AppNav";
import { AppConsumer } from "./provider/AppProvider";

const App = () => {
  return (
    <div className="App">
      <AppConsumer>{context => <AppNav context={context} />}</AppConsumer>
    </div>
  );
};

export default App;
