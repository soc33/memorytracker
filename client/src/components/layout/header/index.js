import React from "react";
import ProfileButton from "../buttons/profileButton";
import "./style.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: "none",
    // opacity: 0.1
  },
  headingStyle: {
    fontSize: 15
  }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header className="typewriter">
      <h5><span className="title1" style={styles.headingStyle}>Memory </span><span className="title2" style={styles.headingStyle}>Tracker!</span></h5>
      <ProfileButton />
    </header>
  );
}

export default Header;
