import React from "react";

const Nav = ({ totalCount }) => {
  return (
    <header className="navbar">
      <i className="fas fa-leaf navbar-logo"></i>
      <span>Habot Tracker</span>
      <span className="navbar-count">{totalCount}</span>
    </header>
  );
};

export default Nav;
