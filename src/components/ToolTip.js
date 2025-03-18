import React, { useState } from "react";
import "../styles/App.css";

const ToolTip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div 
      className="tooltip" 
      onMouseEnter={showTooltip} 
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default ToolTip;