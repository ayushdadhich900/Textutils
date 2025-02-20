import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","success")
  };

  const handleLoClick = () => {
     let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to lowerCase","success")
   };
   const handleClearClick = () => {
     let newText = '';
     setText(newText);
     props.showAlert("Text Clear","success")
   };

   const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to Clipboard","success")
  };

  const handleRemoveExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra Spaces removed","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
   
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container"  style={{
        color: props.mode === 'dark' ? 'white' : '#042743',
          }}>
      <h1 mb-4>{props.heading}</h1>
      <div className="mb-3">
      <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : '#042743',
          }}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
        Convert to Lower Case
      </button>
      <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpacesClick}>
          Remove Extra Spaces
        </button>
    </div>

    <div className="container my-3"  style={{
            color: props.mode === 'dark' ? 'white' : '#042743',
          }}>
        <h1>Your Text Summary</h1>
        <p>{text.trim().split(/\s+/).filter(word => word.length > 0).length} Words and {text.length} characters</p>
        <p>{0.008 * text.trim().split(/\s+/).filter(word => word.length > 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter somthing in the textbox above to previews it here"}</p>
    </div>
    </>
  
  );
}
