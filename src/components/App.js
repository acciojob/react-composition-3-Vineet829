import React from "react";
import ToolTip from "./ToolTip.js";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app" style={{marginTop: "100px"}}>

        <ToolTip text={<h2><div>This is a tooltip</div></h2>}>
          <h1 className="hover-item">Hover over me</h1>
        </ToolTip>
        <ToolTip text={<p><div>This is another tooltip</div></p>}>
          <p className="hover-item">Hover over me to see another tooltip</p>
        </ToolTip>
    </div>
  );
};

export default App;