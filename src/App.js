import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Step 1: Create a state to hold the window width
  const [width, setWidth] = useState(window.innerWidth);

  // Step 2: Update the width whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Listen for the resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="main">
      <h1>Window Width</h1>
      <p>The current width of the window is: <span className="width-box">{width}</span> px</p>
    </div>
  );
}

export default App;

