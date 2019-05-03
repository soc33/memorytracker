import React, { Component } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Wrapper from "../components/layout/wrapper";
import Submit from "../components/layout/buttons/submitButton";
import Modal from "../components/layout/modal/signupModal";
import FAQs from "../components/content/FAQs";

function Home() {
  return (
    <div>
      <Header />
    <Wrapper>
    <FAQs />
    <Submit onClick={() => {Modal.signup()}}>
      Sign up!
    </Submit>
    </Wrapper>
    <Footer />
    </div>
  );
}

export default Home;
