import React from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Wrapper from "../components/layout/wrapper";
// import Submit from "../components/layout/buttons/submitButton";
import SignUpModal from "../components/layout/modal/signupModal";
import SignInModal from "../components/layout/modal/signinModal";
import FAQs from "../components/content/FAQs";

function Home() {
  return (
    <div>
      <Header />
    <Wrapper>
      <SignUpModal />
      <SignInModal />
    <FAQs />
    {/* <Submit onClick={() => {SignUpModal.signup()}}>
      Sign up!
    </Submit> */}
    </Wrapper>
    <Footer />
    </div>
  );
}

export default Home;
