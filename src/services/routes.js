import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CreateArticle from "../components/Article/CreateArticle";
import EditArticle from "../components/Article/EditArticle";
import ReadArticle from "../components/Article/ReadArticle";
import Quote from "../components/Quote";
import NotFound from "../components/NotFound";
import Rezume from "../components/Rezume";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route exact path="/login" component={Login} />
      <Route path="/article/:slug" component={ReadArticle} />
      <Route path="/rezume" component={Rezume} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/articles/new" component={CreateArticle} />
      <PrivateRoute path="/articles/:slug/edit" component={EditArticle} />
      <PrivateRoute path="/quote" component={Quote} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Routes;
