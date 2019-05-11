import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Add from "./AddGame";
import Search from "./Search";
import SendFavs from "./SendFavs";
import API from "../utils/API";
import LoginState from "../components/content/loginState";



class MemoryTracker extends Component {
  state = {
    loginState: LoginState.isAuthorized()
  };

  componentDidMount() {
    LoginState.getLogInState()
  };

  componentWillUnmount() {

  };


  logout = () => {
    API.logout()
      .then(res => {
        LoginState.isAuthorized();
      })
      .catch(err => {
        LoginState.isAuthorized();
      });
  };

  getUsername = () => {
    return this.LoginState ? this.LoginState.getUsername() : undefined;
  };

  getAuth = () => {
    console.debug("getAuth - loginState: '" + LoginState.isAuthorized() + "'");
    return LoginState.isAuthorized();
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => (
            this.getAuth() ? (
              <Dashboard
              username={this.getUsername()}
              isAuthorized={this.getAuth()}
            />
            ) : (
                <Home
                  isAuthorized={this.getAuth()}
                />
              )
          )} />
        </Switch>
      </Router>
    );
  }
}

export default MemoryTracker;
