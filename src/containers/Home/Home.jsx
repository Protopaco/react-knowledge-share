import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./Home.css";

export default function Home() {
  return (
    <div className="page-root">
      <img
        className="main-logo"
        src="/images/NameLogo.png"
        alt="International Name Search"
      />
      <Link to="/search">
        <Button buttonText="ENTER" />
      </Link>
    </div>
  );
}
