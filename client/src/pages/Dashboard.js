import React, { Component } from "react";
import API from "../utils/API";
import Wrapper from "../components/wrapper";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import SubmitButton from "../components/layout/buttons/submitButton";
import ProfileButton from "../components/layout/buttons/profileButton";

class Dashboard extends Component {
  state = {
   latest = [],
   best = [],
   worst =[]
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
          <h1 className="text-center">Memory Tracker</h1> <ProfileButton />
          <SubmitButton>Log in</SubmitButton>
          <SubmitButton>Create a new account</SubmitButton>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Wrapper>
      </div>
    );
  }
}

export default Dashboard;
