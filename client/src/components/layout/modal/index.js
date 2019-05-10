import React, { Component } from 'react';
import Wrapper from "../wrapper";
import API from "../../../utils/API";
import Form from "../form/Form";
import "./style.css";
import MemoryTracker from "../../../pages/MemoryTracker";
import PropTypes from "prop-types";
import { withRouter } from "react-router";


class signinModal extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
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
  
  signIn= {

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
      <h2>{this.state.message}</h2>
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

export default withRouter(signinModal);
