import React from 'react'
import {Switch, Route} from 'react-router-dom'
import RecentPosts from "../components/RecentPosts";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CreateArticle from "../components/Article/CreateArticle";
import EditArticle from '../components/Article/EditArticle'
import ReadArticle from "../components/Article/ReadArticle";
import Quote from "../components/Quote";
import NotFound from "../components/NotFound";


const Routes = () => {
  return (
    <Switch>
     <Route path="/" component={RecentPosts} exact />
     <Route exact path="/login" component={Login} />
     <Route path="/article/:slug" component={ReadArticle} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/articles/new" component={CreateArticle} />
      <PrivateRoute path="/articles/:slug/edit" component={EditArticle} />
      <PrivateRoute path="/quote" component={Quote} />
      <Route component={NotFound}/>
    </Switch>
  )
};
export default Routes
