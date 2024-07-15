// src/components/Letter.js
import React from "react";
import './Letter.css'; // Thêm tệp CSS

const Letter = ({ letter, isSelected, isCorrect, onClick }) => {
  const className = isSelected
    ? isCorrect
      ? "btn btn-success m-1 letter-button"
      : "btn btn-danger m-1 letter-button"
    : "btn btn-outline-secondary m-1 letter-button";

  return (
    <button className={className} onClick={onClick}>
      {letter}
    </button>
  );
};

export default Letter;