import React, { useState, useEffect } from "react";

const TextForm = (props) => {
  const { isEnableMood } = props;

  let [text, setText] = useState("");
  let [totalWords, setTotalWords] = useState(null);

  const handleOnChange = (e) => {
    let value = e.target.value;
    setText(value);
  };
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCaptalize = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    setText(newText.join(" "));
  };
  const handleRemoveSpaces = () => {
    let trimText = text.split(/[ ]+/);
    setText(trimText.join(" "));
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };
  useEffect(() => {
    const countWordArr = [];
    text.split(" ").map((word) => word !== "" && countWordArr.push(word));
    setTotalWords(countWordArr.length);
  }, [text]);

  const handleClear = () => {
    setText("");
  };
  return (
    <div className="mx-auto">
      <h2
        className={(isEnableMood ? "text-white" : "text-dark") + " text-center"}
      >
        Try TextUtils - word counter, character counter, remove extra spaces
      </h2>
      <div className="my-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <div className="col-auto my-4">
          <button
            type="submit"
            className="btn btn-primary mx-1"
            onClick={handleUpperCase}
          >
            Convert to UpperCase
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1"
            onClick={handleLowerCase}
          >
            Convert to LowerCase
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1"
            onClick={handleCaptalize}
          >
            First Letter Captalize
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1"
            onClick={handleRemoveSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1"
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1"
            onClick={handleClear}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className={isEnableMood ? "text-white" : "text-dark"}>
        <h4> Text Output </h4>
        <p>
          Preview:
          <span className="fw-bold"> {text.length > 0 ? text : 0} </span>
        </p>
        <p>
          Character Count :
          <span className="fw-bold"> {text.split(" ").join("").length}</span>
        </p>
        <p>
          Word Count :
          <span className="fw-bold"> {totalWords ? totalWords : 0} </span>
        </p>
      </div>
    </div>
  );
};
export default TextForm;
