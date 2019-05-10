import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
// import NavTabs from "../components/layout/Navtabs";
import Home from "./Home";
import Add from "./AddGame";
import Search from "./Search";
import SendFavs from "./SendFavs";



class MemoryTracker extends Component {


  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/send" component={SendFavs} />
            <Route exact path="/search" component={Search} />
            <Route component={Home} />

          </div>
        </Router>
      </div>
    );
  }
}

export default MemoryTracker;