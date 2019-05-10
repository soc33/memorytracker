import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavTabs from "../components/layout/Navtabs";
import Home from "./Home";
import Add from "./AddGame";
import Search from "./Search";
import SendFavs from "./SendFavs";



class MemoryTracker extends Component {
  state = {
    currentPage: "Landing"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Landing") {
      return <Home />;
    } else if (this.state.currentPage === "Dashboard") {
      return <Dashboard />;
    } else if (this.state.currentPage === "Add") {
      return <Add />;
    } else if (this.state.currentPage === "Search") {
      return <Search />;
    } else if (this.state.currentPage === "Send") {
      return <SendFavs />;
    } else {
      return <Home />;
    }
  };

  render() {
    return (
        <div>
          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>
    );
  }
}

export default MemoryTracker;