import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase letter was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Word capitalized','success');
  };

  const handleDownClick = () => {
    //console.log("Lowercase letter was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Word lowercased','success');
  };

  const handleClearClick = () => {
    //console.log("Lowercase letter was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert('Text cleared','success');
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Copied to Clipboard','success');
  };

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };


  const [text, setText] = useState('');
  

  return (
    <>
      <div className="container">
        <h1 style={{color: props.mode==='light' ? 'black' : 'white'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light' ? 'white' : '#6c757d' ,  color: props.mode==='light' ? 'black' : 'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='light' ? 'black' : 'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.length} characters , {text === ''  ? 0 : text.split(/\s+/).filter((element)=>{return (element.length!==0);}).length} words  and {text === '' ? 0 : text.split(".").length-1} sentences</p>
        <p>{0.008 * (text === ''  ? 0 : text.split(" ").length)} Minutes Read</p>
        <p>{text === '' ? 0 : new Set(text.split(/\s+/)).size} distinct words</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : " Nothing to Preview!"}</p>
      </div>
    </>
  );
}
