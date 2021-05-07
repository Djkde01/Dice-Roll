import React from "react";

import Dot from "./Dot";
import "@styles/components/DiceFace.css";

const DiceFace = ({ faceSide, ...props }) => {
  const dots = [];

  for (let i = 1; i <= faceSide; i++) {
    dots.push(<Dot key={i} />);
  }

  return (
    <li className="die-item" data-side={faceSide}>
      {dots}
    </li>
  );
};

export default DiceFace;
