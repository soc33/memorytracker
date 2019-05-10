import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Add from "./AddGame";
import Search from "./Search";
import SendFavs from "./SendFavs";
import API from "../utils/API";



class MemoryTracker extends Component {
  state = {
    isAuth: false,
    activeTab: "",
    username: "",
    authSites: ["/dashboard", "/send", "/search", "/add"],
    wait404: true
  };

  componentDidMount() {
    this.isAuthorized();
  };

  componentWillUnmount() {

  };

  resetState = () => {
    this.setState({
      isAuth: false,
      username: ""
    });
  };

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        this.setState({ wait404: false });
        if (res.data.message) {
          this.resetState();
        } else {
          this.setState({
            isAuth: true,
            username: res.data.username
          })
          this.redirect();
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ wait404: false });
        this.resetState();
      });
  };


  logout = () => {
    API.logout()
      .then(res => {
        this.isAuthorized();
      })
      .catch(err => {
        this.isAuthorized();
      });
  };
  
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/dashboard" render={props => (
                <Dashboard
                  username={this.state.username}
                  isAuthorized={this.isAuthorized}
                />
              )}
              />
              <Route exact path="/" render={() => (
                this.state.isAuth ? (
                  <Redirect to="/dashboard" />
                ) : (
                    <Home />
                  )
              )} />
              <Route exact path="/add" render={props => (
                <Add
                  username={this.state.username}
                  isAuthorized={this.isAuthorized}
                />
              )}
              />
              <Route exact path="/send" render={props => (
                <SendFavs
                  username={this.state.username}
                  isAuthorized={this.isAuthorized}
                />
              )}
              />
              <Route exact path="/search" render={props => (
                <Search
                  username={this.state.username}
                  isAuthorized={this.isAuthorized}
                />
              )}
              />
              <Route component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default MemoryTracker;
