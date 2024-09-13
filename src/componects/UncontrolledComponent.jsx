import React, { useEffect, useRef, useState } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleShowValue = () => {
    setInputValue(inputRef.current.value);
  };
  return (
    <div>
      <h3>Uncontrolled Input</h3>
      <input
        ref={inputRef}
        type="text"
        name=""
        id=""
        placeholder="Enter Name"
        onChange={handleShowValue}
      />
      <button onClick={handleShowValue}>Show Value</button>

      <p>Name: {inputValue}</p>
    </div>
  );
};

export default UncontrolledComponent;
