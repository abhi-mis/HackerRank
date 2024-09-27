import React, { useState } from "react";
import './App.css';
import TextField from "./components/textField";
import 'h8k-components';

const title = "Text Append";

function App() {
  // State variables to hold the values of the text fields
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');

  // Event handler for the first TextField component
  const handleFirstTextChange = (event) => {
    setFirstText(event.target.value);
  };

  // Event handler for the second TextField component
  const handleSecondTextChange = (event) => {
    setSecondText(event.target.value);
  };

  // Concatenate the text fields with a space in between
  const concatenatedText = `${firstText} ${secondText}`.trim();

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center mt-50">
        <section className="layout-column">
          {/* First TextField Component */}
          <div data-testid="first-text">
            <TextField labelText="First Text" onChange={handleFirstTextChange} />
          </div>

          {/* Second TextField Component */}
          <div data-testid="second-text">
            <TextField labelText="Second Text" onChange={handleSecondTextChange} />
          </div>

          {/* Display the concatenated text */}
          <label className="mt-50 text-align-center">
            Appended Text is:
          </label>
          <label className="mt-10 finalText" data-testid="final-text">
            {concatenatedText}
          </label>
        </section>
      </div>
    </div>
  );
}

export default App;
