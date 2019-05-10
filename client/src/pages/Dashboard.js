import React, { Component } from "react";
import Wrapper from "../components/layout/wrapper";
import Header from "../components/layout/header";
import SubmitBtn from "../components/layout/buttons/submitButton";


class Dashboard extends Component {
  state = {
    latest: []
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    // API.getLatestList()
    //   .then(res => this.setState({ latest: res.data.message }))
    //   .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <Header>
          <h1 className="typewriter"><span className="title1" >Memory </span><span className="title2" >Tracker!</span></h1>
        </Header>
        <Wrapper className="paper container border border-primary">
        <h1 className="typewriter">Dear <span className="title1" >Memory </span><span className="title2" >Tracker!</span></h1> 
        <h3 className="typewriter">Today I ... </h3>
        <SubmitBtn className="btn-primary">Saw a TV show...</SubmitBtn>
        <SubmitBtn className="btn-primary">Saw a Movie...</SubmitBtn>
        <SubmitBtn className="btn-primary">Played a Game...</SubmitBtn>
        <SubmitBtn className="btn-primary">Went to a restaurant...</SubmitBtn>
        <SubmitBtn className="btn-primary">Read a book...</SubmitBtn>
        <SubmitBtn className="btn-primary">Listened to music...</SubmitBtn>
        </Wrapper>
      </div>
    );
  }
}

export default Dashboard;
