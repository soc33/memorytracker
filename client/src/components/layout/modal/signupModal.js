import React, { Component } from "react";


class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <label className="modal-bg" for="modal-1"></label>
        <div className="modal-body">
          <label className="btn-close" for="modal-1">X</label>
          <h4 className="modal-title">Modal Title</h4>
          <h5 className="modal-subtitle">Modal Subtitle</h5>
          <p className="modal-text">This is an example of modal which is implemented with pure CSS! :D</p>
          <label for="modal-1">Nice!</label>
        </div>
      </div>
    )
  }
}

export default Modal;
