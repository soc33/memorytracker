import React, { Component } from 'react';
import "./style.css";

class profileButton extends Component {


  render() {
    return (
      <div>
        <img alt="profile" src="../../../images/profile.png" style={{height: 15}} popover-bottom="Popover on bottom" />
        <li>Logs</li>
        <li>Send Favorites</li>
        <li>Logout</li>
        
      </div>
    );
  }
}


export default profileButton;