import React, { useState } from "react";

export default function (props) {
  const handleUpperClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Text changed to UPPERCASE", "success");
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text changed to lowercase", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleClearClick = (e) => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleCopyClick = (e) => {
    const copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied to Clipboard", "primary");
  };

  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="mt-3">
        <h1 className="my-3">{props.title}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange}
        />
      </div>
      <button className="btn btn-primary mt-3 me-3" onClick={handleUpperClick}>
        Convert to UPPERCASE
      </button>
      <button className="btn btn-primary mt-3 me-3" onClick={handleLowerClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mt-3 me-3" onClick={handleCopyClick}>
        Copy Text
      </button>
      <button className="btn btn-primary mt-3 me-3" onClick={handleClearClick}>
        Clear Text
      </button>
      <div className="my-3">
        <h3>Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} letters.
        </p>
      </div>
      <div className="my-3">
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
