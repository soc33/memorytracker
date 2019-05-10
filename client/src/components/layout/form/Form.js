import React from 'react';
import { FormBtn, Input } from "../../content/Form";
import "./style.css";

function Form({handleInputChange, handleSignInSubmit, handleSignUpSubmit, email, password, username }) {
  return (
    <div className="row card-body spacer" id="signIn">
      <div className="col-5 padding-left">
        <h4 className="card-title center">Member Sign in</h4>
        <label htmlFor="email">Email:</label>
        <Input id="email" type="email" name="email" value={email} onChange={handleInputChange} />
        <label htmlFor="password">Password:</label>
        <Input id="password" type="password" name="password" value={password} onChange={handleInputChange} />
        <FormBtn onClick={handleSignInSubmit} type="submit" >Sign me in!</FormBtn>
      </div>
      <div className="col-2 ">
        <h3 className="center">Or</h3>
      </div>
      <div className="col-5 ">
        <h4 className="card-title center">First Time Signing up!</h4>
        <label htmlFor="username">Username of your choice:</label>
        <Input id="username" type="text" value={username} onChange={handleInputChange} />
        <label htmlFor="email2">Email:</label>
        <Input id="email2" type="email" value={email} onChange={handleInputChange} />
        <label htmlFor="password2">Password:</label>
        <Input id="password2" type="password" value={password} onChange={handleInputChange} />
        <FormBtn className="spacer" onClick={handleSignUpSubmit}>Sign me up!</FormBtn>
      </div>
    </div>
  );
}

export default Form;