import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavTabs from "../components/layout/Navtabs";
import Home from "./pages/Home";
import Add from "./pages/AddGame";
import Search from "./pages/Search";
import SendFavs from "./pages/SendFavs";
import SetUp from "./pages/SetUp";
import "./index.css";



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
    } else if (this.state.currentPage === "Settings") {
      return <SetUp />;
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