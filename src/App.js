import React from "react";
import CalorieCalculator from "./CalorieCalculator";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";

import Header from "./Header";
import "./bootstrap.min.css";
import "./Style.css";
import "react-calendar/dist/Calendar.css";
//import './App.scss';

import { Route, Switch, Redirect } from "react-router-dom";
import decode from "jwt-decode";

//---for login authentication -------
const checkAuth = () => {
  const accesstoken = localStorage.getItem("access");
  const refreshToken = localStorage.getItem("refresh");
  //if theres not token -> user is not logged in
  if (!accesstoken || !refreshToken) {
    return false;
  }
  //check if refresh token is valid -> we we can get more access tokens
  try {
    // deocode refresh token -> if theres an error => not a valid token
    //payload has expiration date
    const payload = decode(refreshToken);
    //if expired
    if (payload.exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      //if the user is authenticated render otherwise redirect back to login
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);
//-------------------------

function App(props) {
  
  return (
    <div className="App">
      <nav>
        <Header></Header>
      </nav>

      <main>
        <Switch>
          <Route exact path={"/bitebox-pages/Login/"} component={Login} />
          <Route exact path={"/bitebox-pages/Register/"} component={Register} />
          <Route exact path={"/bitebox-pages/Dashboard/"} component={Dashboard} />
          <Route
            exact
            path={"/bitebox-pages/CalorieCalculator/"}
            component={CalorieCalculator}
          />
          <AuthRoute exact path={"/bitebox-pages/Dashboard/"} component={Dashboard} />
          <Route exact path={"/bitebox-pages/Home/"} component={Home} />
          <Route exact path={"/bitebox-pages/"} component={Home} />
        </Switch>
      </main>
      
    </div>
      
  );
}

export default App;
