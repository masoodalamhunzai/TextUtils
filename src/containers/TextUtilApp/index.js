import React, { useState } from "react";
import TextForm from "../../components/TextForm";
import NavBar from "../../components/NavBar";
import Alert from "../../components/Alert";
import { BrowserRouter as Router } from "react-router-dom";

const TextUtilApp = () => {
  const [isEnableMood, setEnableMood] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const toggleMood = () => {
    setEnableMood(!isEnableMood);
    if (isEnableMood) {
      document.body.style.backgroundColor = "#fff";
      showAlert(" You should enable Light mood", "success");
    } else {
      document.body.style.backgroundColor = "rgb(12 12 13)";
      showAlert(" You should enable dark mood", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlertMessage({ message, type });
    setTimeout(() => {
      setAlertMessage(null);
    }, 2000);
  };

  return (
    <Router>
      <NavBar toggleMood={toggleMood} isEnableMood={isEnableMood} />
      {alertMessage && <Alert alertMessage={alertMessage} />}
      <div className="container my-5">
        <TextForm isEnableMood={isEnableMood} />
      </div>
    </Router>
  );
};
export default TextUtilApp;
