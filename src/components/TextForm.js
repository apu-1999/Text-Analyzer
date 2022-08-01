import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase letter was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    //console.log("Lowercase letter was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    //console.log("Lowercase letter was clicked" + text);
    let newText = '';
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };


  const [text, setText] = useState('');
  

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.length} characters , {text === ''  ? 0 : text.split(" ").length} words  and {text === '' ? 0 : text.split(".").length-1} sentences</p>
        <p>{0.008 * (text === ''  ? 0 : text.split(" ").length)} Minutes Read</p>
        <p>{text === '' ? 0 : new Set(text.split(" ")).size} distinct words</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
