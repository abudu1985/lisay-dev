import React, {useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedUser } from "../store/selectors/userSelectors";
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const isLoggedIn = useSelector(isLoggedUser);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!isLoggedIn ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};


export default PrivateRoute