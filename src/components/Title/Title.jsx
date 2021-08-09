import React from "react";
import "./Title.css";

export default function Title({ text = "" }) {
  return <div className="title-text">{text}</div>;
}
