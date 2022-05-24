import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import React from "react";
import LoginPage from "../pages/login-page/login-page";
import { isAuthenticated } from "../utils/session";
import PrivateRoute from "./private-route";
import RouteContainer from "./route-container";
import RegisterPage from "../pages/register-page/register-page";

const Root = () => {
  return (
    <div className="bg-blue-bg bg-cover bg-center h-full w-full flex justify-center items-center">
      <Router basename={"example"}>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route
            path="/login"
            exact
            render={() => {
              return isAuthenticated()
                ? <Redirect to="/home" />
                : <LoginPage />;
            }}
          />
          <PrivateRoute path="/" component={RouteContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default Root;
