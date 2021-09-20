import React, { useState } from "react";

const Alert = (props) => {
  let [showAlert, setShowAlert] = useState(true);
  const handleAlert = () => {
    setShowAlert(false);
  };
  const { message, type } = props.alertMessage ? props.alertMessage : "";
  return (
    showAlert && (
      <div
        className={`alert alert-${type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>Hey</strong> {message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={handleAlert}
        ></button>
      </div>
    )
  );
};
export default Alert;
