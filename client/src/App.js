import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Add from "./pages/AddGame";
import Search from "./pages/Search";
import SendFavs from "./pages/SendFavs";
import SetUp from "./pages/SetUp";
// import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
// import Wrapper from "./components/layout/wrapper";
import FAQs from "./components/content/FAQs";
import "./index.css";
import Jumbotron from "./components/layout/jumbotron";


function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
          <Route exact path="/add" component={Add} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/settings" component={SetUp} />
          <Route exact path="/send" component={SendFavs} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/search" component={Search} />
          <FAQs/>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
