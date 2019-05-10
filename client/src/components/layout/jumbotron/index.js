import React, { Component } from "react";
import "./style.css";
import SignInUpButton from "../buttons/submitButton";


const styles = {
  headingStyle: {
    fontSize: 70
  }
};


class Jumbotron extends Component {

  render() {
    return (
      <header className="header typewriter">
        <h1 className="typewriter"><span className="title1" style={styles.headingStyle}>Memory </span><span className="title2" style={styles.headingStyle}>Tracker!</span></h1>
        <SignInUpButton><a href="#signIn">Signin/Signup!</a></SignInUpButton>
      </header>
    );
  }
}

export default Jumbotron;
