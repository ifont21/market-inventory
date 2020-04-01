import React from "react";
import { Link } from "react-router-dom";

import "./nav-menu.styles.scss";

export const NavMenu = ({ match }) => {
  return (
    <div className="nav-menu__wrapper">
      <h1 className="nav-menu__title">My Dashboard</h1>
      <div className="nav-menu__item">
        <Link to={`${match.path}/`}>Registered Products</Link>
      </div>
      <div className="nav-menu__item">
        <Link to={`${match.path}/existence`}>Existence</Link>
      </div>
    </div>
  );
};
