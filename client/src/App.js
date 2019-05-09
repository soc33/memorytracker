import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Add from "./pages/AddGame";
import Search from "./pages/Search";
import SendFavs from "./pages/SendFavs";
import SetUp from "./pages/SetUp";
import "./index.css";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/add" component={Add} />
          <Route exact path="/settings" component={SetUp} />
          <Route exact path="/send" component={SendFavs} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/search" component={Search} />
          <Route component={Home} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
