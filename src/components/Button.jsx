import React from "react";

const Button = ({ className = "", children, ...props }) => {
  return (
    <button
      className={`bg-primary text-white py-2 px-4 rounded-lg font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
