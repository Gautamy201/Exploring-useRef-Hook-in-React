import React, { useEffect, useRef } from "react";

const BackgroundColorChanger = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.style.backgroundColor = "rgb(147, 149, 148)";
  }, []);
  return (
    <div>
      <h3>Color Changer</h3>
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

export default BackgroundColorChanger;
