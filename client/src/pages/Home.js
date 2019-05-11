import React from "react";
import Jumbotron from "../components/layout/jumbotron";
import SingInUpModal from "../components/layout/modal";
import Footer from "../components/layout/footer";
import FAQs from "../components/content/FAQs";

function Home(props) {
  return (
    <div>
     <Jumbotron />
          <FAQs/>
          <SingInUpModal isAuthenticated={props.isAuthenticated} />
    <Footer />
    </div>
  );
}

export default Home;
