import React from "react";
import { NavLink } from "react-router-dom";

const Navigate = () => {
  const navigate = [
    {
      path: "/",
      name: "Contact list",
    },
    {
      path: "/addManager",
      name: "Add Manager",
    },
  ];

  return (
    <div className="d-flex justify-content-between container nav-container">
      {navigate.map((nav) => (
        <NavLink key={nav.name} to={nav.path} >
          {nav.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navigate;
