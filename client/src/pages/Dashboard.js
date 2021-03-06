import React, { Component } from "react";
import Wrapper from "../components/layout/wrapper";
import Header from "../components/layout/header";
import { Link } from "react-router-dom";
import SubmitBtn from "../components/layout/buttons/submitButton";
import LoginState from "../components/content/loginState";
// import API from "../utils/API";


class Dashboard extends Component {
  state = {
    latest: []
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.getLatestList()
  //     .then(res => this.setState({ latest: res.data.message }))
  //     .catch(err => console.log(err));
  // }


  render() {
    return (
      <div>
        <Header>{LoginState.getUsername()}</Header>
        <Wrapper className="paper container border border-primary">
          <h1 className="typewriter">Dear <span className="title1" >Memory </span><span className="title2" >Tracker!</span></h1>
          <h3 className="typewriter">Today I ... </h3>
          <div className="row">
            <div className="col-6">
              <Link to="/Add"><SubmitBtn className="btn-primary">Saw a TV show...</SubmitBtn></Link>
              <SubmitBtn className="btn-primary">Saw a Movie...</SubmitBtn>
              <SubmitBtn className="btn-primary">Played a Game...</SubmitBtn>
            </div>
            <div className="col-6">
              <SubmitBtn className="btn-primary">Went to a restaurant...</SubmitBtn>
              <SubmitBtn className="btn-primary">Read a book...</SubmitBtn>
              <SubmitBtn className="btn-primary">Listened to music...</SubmitBtn>
            </div>
          </div>
          <hr/>

          <h1>Latest Logs</h1>
          <p>No logs yet :/ Click a button above to get started!</p>
        </Wrapper>
      </div>
    );
  }
}

export default Dashboard;
