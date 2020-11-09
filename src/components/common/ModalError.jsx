import React from "react";

function ModalError(props) {
  return (
    <div
      className="modal fade"
      id="modalError"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalErrorLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalErrorLabel">
              Error when adding to cart
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {" "}
            <p style={{ color: "white", fontSize: "18px" }}>
              Hi, thanks for buying this DVD. However, I have not finished this
              feature yet (back-end part). I'll try to fix the trouble soon.
            </p>
            <p style={{ color: "red", fontSize: "18px" }}>
              Sorry for this inconvenience
            </p>
            <p style={{ color: "red", fontSize: "18px" }}>
              Note: I have finished about 85% of this project. Please check
              others features. Thank you!
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-close"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalError;
