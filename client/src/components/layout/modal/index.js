import React, { Component } from 'react';
import { FormBtn, Input } from "../../content/Form";
import Wrapper from "../wrapper";
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
      <Wrapper>
        <div className="row card-body spacer" id="signIn">
          <div className="col-5 ">
            <h4 className="card-title center">Member Sign in</h4>
            <h5 className="card-subtitle center">Welcome back!</h5>
            <label htmlFor="email1">Email:</label>
            <Input id="email1" type="email" placeholder="jonSnow@iknownothing.com" />
            <label htmlFor="password1">Password:</label>
            <Input id="password1" type="password" placeholder="youllneverknow" />
            <FormBtn onClick={() => this.handleSignInSubmit}>Sign me in!</FormBtn>
          </div>
          <div className="col-2">
            <h3 className="center">Or</h3>
          </div>
          <div className="col-5">
            <h4 className="card-title center">First Time Signing up!</h4>
            <label htmlFor="username">Username of your choice:</label>
            <Input id="username" type="text" placeholder="CoolestNameEver" />
            <label htmlFor="email">Email:</label>
            <Input id="email" type="email" placeholder="jonSnow@iknownothing.com" />
            <label htmlFor="emailCheck">Confirm Email:</label>
            <Input id="emailCheck" type="email" placeholder="jonSnow@iknownothing.com" />
            <label htmlFor="password">Password:</label>
            <Input id="password" type="password" placeholder="youllneverknow" />
            <label htmlFor="passwordCheck">Confirm Password:</label>
            <Input id="passwordCheck" type="password" placeholder="youllneverknow" />
            <FormBtn className="spacer" onClick={() => this.handleSignUpSubmit}>Sign me up!</FormBtn>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default signinModal;


