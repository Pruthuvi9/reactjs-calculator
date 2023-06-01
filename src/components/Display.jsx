import React from "react";

const Display = ({ display = 0 }) => {
  return (
    <div id="display" className="display">
      {display}
    </div>
  );
};

export default Display;
