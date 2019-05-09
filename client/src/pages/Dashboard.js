import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/layout/wrapper";
import ProfileButton from "../components/layout/buttons/profileButton";
import Latest from "../components/layout/cards/latestCard";
import Header from "../components/layout/header";


class Dashboard extends Component {
  state = {
    latest: []
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getLatestList()
      .then(res => this.setState({ latest: res.data.message }))
      .catch(err => console.log(err));
  }


  render() {
    return (
        <Wrapper className="paper container border border-primary">
          <Header />
          <h1 className="typewriter"><span className="title1" >Memory </span><span className="title2" >Tracker!</span></h1>

          <Latest/>
        </Wrapper>
    );
  }
}

export default Dashboard;
