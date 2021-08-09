import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <div className="header-root">
      <Link to="/">
        <img
          className="logo"
          alt="International Name Search"
          src="/images/NameLogoSmall.png"
        />
      </Link>
    </div>
  );
}
