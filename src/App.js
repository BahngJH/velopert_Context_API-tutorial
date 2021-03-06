import React from "react";
import ColorBox from "./component/ColorBox";
import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./component/SelectColors";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
