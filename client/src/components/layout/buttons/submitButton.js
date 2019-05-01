import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SubmitBtn({ children }, props) {
  return (
    <div className="submit-btn row flex-spaces child-borders" {...props} role="button" tabIndex="0">
      <label class="paper-btn margin" for="modal-1">Open Modal!</label>
      {children}
      {/* the following line was below the end div tag in the example code from paper css website */}
      <input class="modal-state" id="modal-1" type="checkbox"></input>
    </div>
  );
}

export default SubmitBtn;
