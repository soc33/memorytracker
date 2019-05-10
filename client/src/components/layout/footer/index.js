import React from "react";


const styles = {
  footerStyle: {
    background: "#2ab339",
    height: 50
  }
}
function Footer() {
  return (
    <footer className="sticky" style={styles.footerStyle}>
      <p>Created By Sarah Luning </p>
    </footer>
  )
}

export default Footer;
