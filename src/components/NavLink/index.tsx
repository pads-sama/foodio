import React from "react";
import { NavLink } from "react-router-dom";

const navLink = ({ children, className, to }) => {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
};

export default navLink;
