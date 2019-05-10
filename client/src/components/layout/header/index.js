import React from "react";
import ProfileButton from "../buttons/profileButton";

const styles = {
  headerStyle: {
    background: "d5e3f8",
    height: 30
  },
  headingStyle: {
    fontSize: 15
  }
};

// We use JSX curly braces to evaluate the style object

function Header(props) {
  return (
    <header className="typewriter">
      <h3><span className="title1" style={styles.headingStyle}>Memory </span><span className="title2" style={styles.headingStyle}>Tracker!</span></h3>
      <h3 className="float-right">{props.children}</h3>
      <ProfileButton />
    </header>
  );
}

export default Header;
