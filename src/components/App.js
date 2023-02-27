import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Routes from "../services/routes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
};

export default App;
