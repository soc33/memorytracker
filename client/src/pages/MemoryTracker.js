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
    return this.state.loginState ? this.state.loginState.getUsername() : undefined;
  };

  getAuth = () => {
    return this.state.loginState ? this.state.loginState.getLogInState() : false;
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/dashboard" render={() => (
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
              <Route exact path="/add" render={() => (
                this.getAuth() ? (
                  <Add
                  username={this.getUsername()}
                  isAuthorized={this.getAuth()}
                />
                ) : (
                    <Home
                      isAuthorized={this.getAuth()}
                    />
                  )
              )} />
              <Route exact path="/send" render={() => (
                this.getAuth() ? (
                  <SendFavs
                  username={this.getUsername()}
                  isAuthorized={this.getAuth()}
                />
                ) : (
                    <Home
                      isAuthorized={this.getAuth()}
                    />
                  )
              )} />
              <Route exact path="/search" render={() => (
                this.getAuth() ? (
                  <Search
                  username={this.getUsername()}
                  isAuthorized={this.getAuth()}
                />
                ) : (
                    <Home
                      isAuthorized={this.getAuth()}
                    />
                  )
              )} />
              <Route component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default MemoryTracker;
