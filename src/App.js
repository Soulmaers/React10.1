import React from "react";
import Add from "./components/Add";
import List from "./components/List";
import Filter from "./components/Filter";

import "./App.css";

function App() {
  return (
    <div className="redux_filter">
      <Add />
      <Filter />
      <List />
    </div>
  );
}

export default App;