import React from "react";
import "./Button.css";

export default function Button({
  onClickFunction = {},
  buttonText = "BUTTON",
}) {
  return (
    <button className="button" onClick={onClickFunction}>
      {buttonText}
    </button>
  );
}
