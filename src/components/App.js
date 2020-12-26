import React from "react";
import TopMenu from "./TopMenu";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../services/routes";

const App = () => {
  return (
    <div className="">
        <Router>
            <TopMenu/>
            <Routes/>
        </Router>
    </div>
  );
};

export default App;
