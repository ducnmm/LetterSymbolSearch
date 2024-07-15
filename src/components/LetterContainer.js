// src/components/LetterContainer.js
import React, { useState, useEffect } from "react";
import Letter from "./Letter";

const LetterContainer = () => {
  const [items, setItems] = useState([]);
  const [targetItem, setTargetItem] = useState("");
  const [level, setLevel] = useState(1);
  const [correctSelections, setCorrectSelections] = useState(0);
  const [totalTargetItems, setTotalTargetItems] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "☀★☂♞☯☭☮☢☣☤☥☦☧☨☩☪☫☬☭";

  useEffect(() => {
    generateItems(level);
  }, [level]);

  const generateItems = (level) => {
    let itemsArray = [];
    let numItems = Math.ceil(level / 5) * 15;
    let sourceItems, newTargetItem;

    if (level <= 5) {
      sourceItems = letters;
      newTargetItem = letters[Math.floor(Math.random() * letters.length)];
      numItems = level * 15;
    } else if (level <= 10) {
      sourceItems = symbols;
      newTargetItem = symbols[Math.floor(Math.random() * symbols.length)];
      numItems = (level - 5) * 15;
    } else {
      sourceItems = letters + symbols;
      newTargetItem =
        sourceItems[Math.floor(Math.random() * sourceItems.length)];
      numItems = 75; // Fixed 15 items for levels 11-13
    }

    setTargetItem(newTargetItem);

    let targetCount = 0;
    for (let i = 0; i < numItems; i++) {
      const randomItem =
        Math.random() < 0.2
          ? newTargetItem
          : sourceItems[Math.floor(Math.random() * sourceItems.length)];
      if (randomItem === newTargetItem) targetCount++;
      itemsArray.push({
        item: randomItem,
        isSelected: false,
        isCorrect: false,
      });
    }

    setItems(itemsArray);
    setTotalTargetItems(targetCount);
    setCorrectSelections(0);
  };

  const handleItemClick = (index) => {
    const newItems = [...items];
    const itemObj = newItems[index];
    if (!itemObj.isSelected) {
      itemObj.isSelected = true;
      itemObj.isCorrect = itemObj.item === targetItem;
      setItems(newItems);
      if (itemObj.isCorrect) {
        setCorrectSelections((prevCorrect) => prevCorrect + 1);
      }
    }
  };

  const handleNextLevel = () => {
    if (correctSelections === totalTargetItems) {
      setLevel((prevLevel) => prevLevel + 1);
    } else {
      setToastMessage("You haven't found all the target items yet!");
      setShowToast(true);
    }
  };

  const handlePrevLevel = () => {
    if (correctSelections === totalTargetItems) {
      setLevel((prevLevel) => prevLevel - 1);
    } else {
      setToastMessage("You haven't found all the target items yet!");
      setShowToast(true);
    }
  };

  const handleLevelChange = (newLevel) => {
    if (newLevel >= 1 && newLevel <= 13) {
      setLevel(newLevel);
    }
  };

  useEffect(() => {
    if (showToast) {
      const toastEl = document.getElementById("toast");
      const bsToast = new window.bootstrap.Toast(toastEl);
      bsToast.show();
    }
  }, [showToast]);

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="text">Level: {level}</h2>
          <h3 className="mt-3">
            Find all occurrences of:{" "}
            <span className="text-primary">{targetItem}</span>
          </h3>
          <p className="lead">
            Found: <span className="badge bg-success">{correctSelections}</span>{" "}
            / <span className="badge bg-secondary">{totalTargetItems}</span>
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <div className="item-container d-flex flex-wrap justify-content-center">
            {items.map((itemObj, index) => (
              <Letter
                key={index}
                letter={itemObj.item}
                isSelected={itemObj.isSelected}
                isCorrect={itemObj.isCorrect}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col text-center">
          <button className="btn btn-secondary btn-lg mx-1" onClick={handlePrevLevel}>
            Prev Level
          </button>
          <button className="btn btn-secondary btn-lg mx-1" onClick={handleNextLevel}>
            Next Level
          </button>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Level selection">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((lvl) => (
              <button
                key={lvl}
                className={`btn btn-outline-secondary ${
                  level === lvl ? "active" : ""
                }`}
                onClick={() => handleLevelChange(lvl)}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Toast Notification */}
      <div
        className="toast-container position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 11 }}
      >
        <div
          id="toast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Notification</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              data-bs-autohide="false"
              aria-label="Close"
              onClick={() => setShowToast(false)}
            ></button>
          </div>
          <div className="toast-body">{toastMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default LetterContainer;
