import React, { useEffect, useRef } from "react";

const FocusInputField = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h3> Auto Focus Input</h3>
      <input
        ref={inputRef}
        type="text"
        name=""
        id=""
        placeholder="Enter Name"
      />
    </div>
  );
};

export default FocusInputField;
