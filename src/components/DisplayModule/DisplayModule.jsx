import React from "react";
import "./DisplayModule.css";
import SingleResult from "../SingleResult/SingleResult";
import Title from "../Title/Title";

export default function DisplayModule({ searchResults }) {
  const { name } = searchResults[0];

  const returnResults = () =>
    searchResults.map((result) => (
      <SingleResult key={result.probability} result={result} />
    ));

  return (
    <div>
      <Title text={`Name: ${name}`} />
      <div className="result-frame">{returnResults()}</div>
    </div>
  );
}
