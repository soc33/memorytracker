import React from 'react';
import {FormBtn, Input} from "../../content/Form"

function signinModal() {
  return (
    <div className="card">
      <div className="card-header">Sign up!</div>
      <div className="card-body">
        <h4 className="card-title">My awesome Paper card!</h4>
        <Input/>
        <h5 className="card-subtitle">Nice looking subtitle.</h5>
        <p className="card-text">You can also place image on the bottom of the card.</p>
        
      </div>
      <div className="card-footer"><FormBtn>Sign me up!</FormBtn></div>
    </div>

  );
}

export default signinModal;


