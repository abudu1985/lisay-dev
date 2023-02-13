import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isLoggedUser } from "../store/selectors/userSelectors";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const isLoggedIn = useSelector(isLoggedUser);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!isLoggedIn ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};

export default PrivateRoute;
