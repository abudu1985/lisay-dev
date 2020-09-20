import React from 'react'
import {Switch, Route} from 'react-router-dom'
import RecentPosts from "../components/RecentPosts";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CreateArticle from "../components/Article/CreateArticle";
import EditArticle from '../components/Article/EditArticle'
import ReadArticle from "../components/Article/ReadArticle";

// import Authentication from "./pages/authentication"

const Routes = () => {
  return (
    <Switch>
     <Route path="/" component={RecentPosts} exact />
     <Route exact path="/login" component={Login} />
     <Route path="/article/:slug" component={ReadArticle} />
      {/*<Route path="/login" component={Authentication} />*/}
      {/*<Route path="/register" component={Authentication} />*/}
      {/*<Route path="/dashboard" component={Dashboard} />*/}
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/articles/new" component={CreateArticle} />
      {/*<PrivateRoute path="/articles/:slug" component={EditArticle} exact/>*/}
      <PrivateRoute path="/articles/:slug/edit" component={EditArticle} />
    </Switch>
  )
};
export default Routes
