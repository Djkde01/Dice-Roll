import React from "react";

import "@styles/components/Button.css";

const Button = ({ children, id, type, ...props }) => {
  return (
    <button type={type} id={id}>
      {children}
    </button>
  );
};

export default Button;
