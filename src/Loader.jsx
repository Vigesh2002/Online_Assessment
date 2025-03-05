import React from "react";
import "../src/styles/loader.css"; // Ensure you have this CSS file

const Loader = ({ loadingText }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <h2>{loadingText}</h2> {/* Dynamic text */}
    </div>
  );
};

export default Loader;
