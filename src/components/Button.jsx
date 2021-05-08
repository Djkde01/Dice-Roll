import React from "react";

import "@styles/components/Button.css";

const Button = ({ children, id, ...props }) => {
  return (
    <button type="button" id={id}>
      {children}
    </button>
  );
};

export default Button;
