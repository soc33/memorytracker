import React, { Component } from 'react';
import Link from "react-router-dom";
import Wrapper from "../wrapper";
import API from "../../../utils/API";
import Form from "../form/Form";
import "./style.css";


class signinModal extends Component {
  state = {
    username: "CoolestUsernameEver",
    email: "email",
    password: "password",
    message: ""
  };

  handleSignInSubmit = event => {
    event.preventDefault();
    this.signIn();
  }

  handleSignUpSubmit = event => {
    event.preventDefault();
    this.signUp();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  signIn = () => {
    API.signIn(this.state.email, this.state.password)
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
    API.signUp(this.state.email, this.state.password, this.state.username)
      .then(res =>
        this.setState({
          username: res
        })
      )
      .catch(() =>
        this.setState({
          message: "Unable to login"
        })
      );
  };

  render() {
    return (
      <Wrapper>
        <Form 
        handleInputChange={this.handleInputChange}
        handleSignInSubmit={this.handleSignInSubmit}
        handleSignUpSubmit={this.handleSignUpSubmit}
        email={this.state.email}
        password={this.state.password}
        username={this.state.username}
        />
      </Wrapper>
    );
  }
}

export default signinModal;
