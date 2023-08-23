import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("Hello");
  const [isMouseOver, isMouseOut] = useState(false);

  function handle() {
    setHeading("Submitted");
  }

  function colorHandle() {
    isMouseOut(true);
  }
  function Mouseout() {
    isMouseOut(false);
  }
  return (
    <>
      <div className="container">
        <h1>{headingText}</h1>
        <input type="text" placeholder="What's Your Name?" />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onClick={handle}
          onMouseOver={colorHandle}
          onMouseOut={Mouseout}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default App;
