import React from "react";
import "./style.css";

function SubmitBtn({ children }, props) {
  return (
    <div className="submit-btn row flex-spaces child-borders text-muted" {...props} role="button" tabIndex="0">
      <label className="paper-btn margin" >
      {children}</label>
    </div>
  );
}

export default SubmitBtn;
