import React from "react";
import useScreenType from "./UseScreenType";

const ScreenTypeComponent = () => {
  const screenType = useScreenType();

  return (
    <div>
      <h1> Screen Type: {screenType}</h1>
    </div>
  );
};

export default ScreenTypeComponent;
