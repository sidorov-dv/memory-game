import React from "react";
import cl from "./CardField.module.css";

const CardField = ({ children }) => {
  return <div className={cl.field}>{children}</div>;
};

export default CardField;
