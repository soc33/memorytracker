import React from "react";
import ProfileButton from "../buttons/profileButton";

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
