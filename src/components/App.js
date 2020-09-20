import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Main";
import Login from "./Login";
import Bunny from "./Bunny";
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
