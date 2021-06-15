import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth-Provider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Redirect to="/login" />;
  else return <Route {...rest} component={RouteComponent} />;
};

export default PrivateRoute;
