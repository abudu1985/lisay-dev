import React from "react";
import TopMenu from "./TopMenu";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../services/routes";

const App = () => {
  return (
    <Router>
      <TopMenu />
      <Routes />
    </Router>
  );
};

export default App;
