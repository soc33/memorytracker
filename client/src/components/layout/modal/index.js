import React, { Component } from 'react';
import Wrapper from "../wrapper";
import API from "../../../utils/API";
import Form from "../form/Form";
import "./style.css";


class signinModal extends Component {
  state = {
    username: "CoolestUsernameEver",
    email: "email",
    password: "password",
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  signIn = {

  };

  signUp = () => {
    API.register({ email: this.state.email, username: this.state.username, password: this.state.password })
      .then(res => {
        if (res.data.message) {
          this.setState({
            error: res.data.message
          });
        } else {
          this.props.isAuthorized();
          this.props.closeLogin();
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
          handleInputChange={this.handleInputChange}
          handleSignInSubmit={this.handleSignInSubmit}
          handleSignUpSubmit={this.handleSignUpSubmit}
          email={this.state.email}
          password={this.state.password}
          username={this.state.username}
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
