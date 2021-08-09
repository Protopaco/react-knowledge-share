import React from "react";
import "./SingleResult.css";

export default function SingleResult({ result }) {
  const { age, count, countryId, countryName, probability } = result;

  return (
    <div className="result-root">
      <img
        className="flag-image"
        src={`https://www.countryflags.io/${countryId.toLowerCase()}/flat/64.png`}
        alt={countryName}
      />
      <div className="result-country">{countryName}</div>
      <div>{`Probablity: ${probability}%`}</div>
      <div>{`Age: ${age}`}</div>
      <div>{`Count: ${count}`}</div>
    </div>
  );
}
