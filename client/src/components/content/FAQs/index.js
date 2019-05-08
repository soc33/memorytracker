import React from 'react';
import Wrapper from "../../layout/wrapper";

function index() {
  return (
    <Wrapper>
      <div className="row">
        <h2>What is <span className="title1">Memory </span><span className="title2">Tracker</span>?</h2>
        </div>
      <div className="row">
        <p className="tab"> Memory Tracker is a personal online database for users to keep a record of experienced content in an organized and easy to access way. It allows users to save, search, and send their own thoughts and reviews of content to their friends and family quickly and efficiently.</p>
      </div>
      <div className="row">

        <h2>Why is <span className="title1">Memory </span><span className="title2">Tracker</span>?</h2>
        </div>
      <div className="row">
        <p className="tab">ALL THE CONTENT! But seriously, I created this app to help us navigate this world of overcombursome amounts of content that is not slowing down. I get asked all the time, "What TV shows do you recommend for someone who likes [insert genre here] shows?" Now I won't have to wrack my brain to only remember one or two things I'd like to tell them and then remember 5 more later.. With Memory Tracker I can just sort my entries by the requested genre and my highest rating and send them over! No more missed opportunities. </p>
      </div>
      <div className="row">

        <h2>How is <span className="title1">Memory </span><span className="title2">Tracker</span>?</h2>
        </div>
      <div className="row">
        <p className="tab">Memory tracker uses a mongoose backend to store your entries into your personal tracker containing your current thoughts about the show/movie/game/etc along with your rating from 1-5 stars and whether or not it was a favorite. It also uses API databases to help you log the correct information about what content you are rating, so you don't have to remember all the nitty gritty details to know what you were talking about later. We do that for you! </p>
      </div>
      <div className="row">

        <h2>Why should I care about favorites?</h2>
        </div>
      <div className="row">
        <p className="tab">There's always one. You know the one. The one that is awful yet you can't stop loving it? Now you can rate is correctly as a low value of stars but still keep it in your favorites list without having to search remember if you gave it mercy and rated it 2 stars or went with the truth and rated it 1. </p>
      </div>
      <div className="row">

        <h2>What does it cost?</h2>
        </div>
      <div className="row">
        <p className="tab">Not a single penny. Its totally free!</p>
      </div>
      <div className="row">

        <h2>Will you spam me?</h2>
        </div>
      <div className="row">
        <p className="tab">Never. We will never give out your information. A future state we want to one day implement would be to be able to send you updates on content you log as want to see! </p>
      </div>
      <div className="row">

        <h2>Have More Questions?</h2>
        </div>
      <div className="row">
        <p className="tab">Email me at sarahluning33@gmail.com</p>
      </div>
    </Wrapper>

  );

}

export default index;