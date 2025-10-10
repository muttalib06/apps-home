import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="loader">
      <span className="loader-text">loading</span>
      <span className="load"></span>
    </div>
  );
};

export default Spinner;
