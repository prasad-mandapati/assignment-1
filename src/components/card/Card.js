import React from "react";

const Card = ({ children, className }) => {
  return <div className={`border ${className}`}>{children}</div>;
};

export default Card;
