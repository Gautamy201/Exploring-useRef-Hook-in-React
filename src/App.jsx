import React from "react";
import FocusInputField from "./componects/FocusInputField";
import UncontrolledComponent from "./componects/UncontrolledComponent";
import BackgroundColorChanger from "./componects/BackgroundColorChanger";

const App = () => {
  return (
    <div>
      <h1>Exploring useRef Hook in React</h1>
      <FocusInputField />
      <UncontrolledComponent />
      <BackgroundColorChanger />
    </div>
  );
};

export default App;
