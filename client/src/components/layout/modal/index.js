import React, { Component } from 'react';
import Wrapper from "../wrapper";
import API from "../../../utils/API";
import Form from "../form/Form";
import LoginState from "../../content/loginState";
import "./style.css";


class signinModal extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };
  
  handleSignInSubmit = event => {
    event.preventDefault();
    this.signIn();
  }
  
  handleSignUpSubmit = event => {
    event.preventDefault();
    this.signUp();
  }
  
  handleEmailChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handlePasswordChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleUsernameChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  signIn = () => {

  };

  signUp = () => {
    console.log("email:" + this.state.email + "username:" + this.state.username + "password:" + this.state.password)
    API.register({ email: this.state.email, username: this.state.username, password: this.state.password })
      .then(res => {
        if (res.data.message) {
          this.setState({
            error: res.data.message
          });
        } else {
          LoginState.isAuthorized();
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: "A server error has occured." });
      });
    this.setState({ password: "" });
  };


  render() {
    return (
      <Wrapper>
        <Form
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleUsernameChange={this.handleUsernameChange}
          handleSignInSubmit={this.handleSignInSubmit}
          handleSignUpSubmit={this.handleSignUpSubmit}
        />
        {this.state.error ? (
          <p className="help error-text is-danger">{this.state.error}</p>
        ) : (
            ""
          )}
      </Wrapper>
    );
  }
}

export default signinModal;
