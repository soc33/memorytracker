import React from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Wrapper from "../components/layout/wrapper";
// import Submit from "../components/layout/buttons/submitButton";
import SignUpCard from "../components/layout/modal/signupModal";
import SignInCard from "../components/layout/modal/signinModal";
import FAQs from "../components/content/FAQs";

function Home() {
  return (
    <div>
      <Header />
    <Wrapper>
      <SignUpCard />
      <SignInCard />
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
