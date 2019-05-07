import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/wrapper";
import SubmitButton from "../components/layout/buttons/submitButton";
import ProfileButton from "../components/layout/buttons/profileButton";
import Latest from "../components/layout/cards/latestCard";
import Jumbotron from "../components/layout/jumbotron";


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
      <div>
        <Wrapper style={{ minHeight: "80%" }}>
          <Jumbotron>
            <h1 className="text-center">Memory Tracker</h1> <ProfileButton />
            <SubmitButton>Log in</SubmitButton>
            <SubmitButton>Create a new account</SubmitButton>
          </Jumbotron>
          <Latest>
          latest={this.state.latest}
          </Latest>
        </Wrapper>
      </div>
    );
  }
}

export default Dashboard;
