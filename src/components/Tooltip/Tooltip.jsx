import React, { useState } from "react";

const Tooltip = ({ children, tooltipText, position = "bottom" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  const getTooltipStyle = () => {
    switch (position) {
      case "top":
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)" };
      case "bottom":
        return { top: "100%", left: "50%", transform: "translateX(-50%)" };
      case "left":
        return { right: "100%", top: "50%", transform: "translateY(-50%)" };
      case "right":
        return { left: "100%", top: "50%", transform: "translateY(-50%)" };
      default:
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)" };
    }
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          style={{
            position: "absolute",
            ...getTooltipStyle(),
            backgroundColor: "#333",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            zIndex: 1000,
            fontSize: "12px",
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
