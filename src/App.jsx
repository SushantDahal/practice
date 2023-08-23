import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("");
  const [isMouseOver, isMouseOut] = useState(false);

  const [name, setName] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handle(event) {
    setHeading(name);
    event.preventDefault();
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
        <form onSubmit={handle}>
          <h1>Hello {headingText}</h1>
          <input
            type="text"
            placeholder="What's Your Name?"
            onChange={handleChange}
          />
          <button
            style={{ backgroundColor: isMouseOver ? "black" : "white" }}
            onMouseOver={colorHandle}
            onMouseOut={Mouseout}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default App;
