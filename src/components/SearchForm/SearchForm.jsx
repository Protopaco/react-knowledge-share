import React, { useState } from "react";
import random from "random-name";
import "./SearchForm.css";
import useSearch from "../../hooks/useSearch/useSearch";
import Button from "../Button/Button";

export default function SearchForm({ handleSearchResults }) {
  const [inputValue, setInputValue] = useState("");
  const { onSubmit } = useSearch();

  const localSubmit = async () => {
    setInputValue("");
    handleSearchResults(await onSubmit(inputValue));
  };

  const generateRandom = async () => {
    setInputValue(random.first());
    // handleSearchResults(await onSubmit(random.first()));
  };

  return (
    <div className="form-frame">
      <input
        value={inputValue}
        type="text"
        className="text-input"
        onChange={({ target }) => setInputValue(target.value)}
      />
      <Button onClickFunction={localSubmit} buttonText="SEARCH" />
      <Button
        onClickFunction={() => generateRandom()}
        buttonText="SURPRISE ME"
      />
    </div>
  );
}
