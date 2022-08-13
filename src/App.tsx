import React from "react";
import { Outlet } from "react-router-dom";

import Header from "src/components/organisms/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
