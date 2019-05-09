import React, { Component } from 'react';
import { FormBtn, Input } from "../../content/Form";
import "./style.css";
import API from "../../../utils/API";

// const styling = {
//   signinModalStyle: {
//     width: "auto",
//     height: "auto"
//   }
// }style={styling.signinModalStyle}

class signinModal extends Component {
  handleSignInSubmit = event => {
    event.preventDefault();
    this.signIn();
  }

  handleSignUpSubmit = event => {
    event.preventDefault();
    this.signUp();
  }

  signIn = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };
  signUp = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  render() {
    return (
      <div>
        <div className="card-body" id="signIn">
          <h4 className="card-title">My awesome Paper card!</h4>
          <Input />
          <h5 className="card-subtitle">Nice looking subtitle.</h5>
          <p className="card-text">You can also place image on the bottom of the card.</p>
        </div>
        <FormBtn onClick={() => this.handleSignInSubmit()}>Sign me in!</FormBtn>
        <FormBtn onClick={() => this.handleSignUpSubmit()}>Sign me up!</FormBtn>
      </div>
    );
  }
}

export default signinModal;


