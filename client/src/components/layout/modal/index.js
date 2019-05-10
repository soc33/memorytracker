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
  state = {
    email: "",
    password: ""
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

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };


  signIn = () => {
    API.signin(this.state.email, this.state.password)
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
    API.getBooks(this.state.email, this.state.password)
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
            <label htmlFor="email">Email:</label>
            <Input id="email" type="email" placeholder="jonSnow@iknownothing.com" name="email" value={this.state.email} onChange={this.handleInputChange} />
            <label htmlFor="password">Password:</label>
            <Input id="password" type="password" placeholder="youllneverknow" name="password" value={this.state.password} onChange={this.handleInputChange} />
            <FormBtn onClick={() => this.handleSignInSubmit} type="submit" >Sign me in!</FormBtn>
          </div>
          <div className="col-2">
            <h3 className="center">Or</h3>
          </div>
          <div className="col-5">
            <h4 className="card-title center">First Time Signing up!</h4>
            <label htmlFor="username">Username of your choice:</label>
            <Input id="username" type="text" placeholder="CoolestNameEver" onChange={this.handleInputChange} />
            <label htmlFor="email2">Email:</label>
            <Input id="email2" type="email" placeholder="jonSnow@iknownothing.com" onChange={this.handleInputChange} />
            <label htmlFor="emailCheck">Confirm Email:</label>
            <Input id="emailCheck" type="email" placeholder="jonSnow@iknownothing.com" onChange={this.handleInputChange} />
            <label htmlFor="password2">Password:</label>
            <Input id="password2" type="password" placeholder="youllneverknow" onChange={this.handleInputChange} />
            <label htmlFor="passwordCheck">Confirm Password:</label>
            <Input id="passwordCheck" type="password" placeholder="youllneverknow" onChange={this.handleInputChange} />
            <FormBtn className="spacer" onClick={() => this.handleSignUpSubmit}>Sign me up!</FormBtn>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default signinModal;
