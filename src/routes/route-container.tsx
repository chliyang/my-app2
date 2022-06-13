import { Switch } from "react-router-dom";
import React from "react";
import PrivateRoute from "./private-route";
import useRouters from "./hooks/use-routers";

const RouteContainer = () => {
  const { visitableRoutes } = useRouters();
  return (
    <Switch>
      {visitableRoutes.map((route) => (<PrivateRoute key={route.path} path={route.path} exact auth component={route.component} />))}
    </Switch>
  );
};

export default RouteContainer;
