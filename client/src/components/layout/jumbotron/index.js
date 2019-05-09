import React, { Component } from "react";
import "./style.css";
import SignInUpButton from "../buttons/submitButton";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    // background: "red",
    // opacity: 0.1
  },
  headingStyle: {
    fontSize: 70
  }
};

// We use JSX curly braces to evaluate the style object

class Jumbotron extends Component {

  handleScroll = event => {
    event.preventDefault();
    this.document.querySelecotor('footer').scrollIntoView()
  }

  render() {
    return (
      <header className="header typewriter">
        <h1 className="typewriter"><span className="title1" style={styles.headingStyle}>Memory </span><span className="title2" style={styles.headingStyle}>Tracker!</span></h1>
        <SignInUpButton onClick={() => this.handleScroll()}>Signin/Signup!</SignInUpButton>
      </header>
    );
  }
}

export default Jumbotron;
