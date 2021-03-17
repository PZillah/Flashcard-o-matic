import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import Navbar from "../Layout/Navbar";
import AddCardBtns from "../ViewDeck/AddCardsBtn";

const StudyScreen = ({ button, deck, setDeck, error, setError }) => {
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, []);
  if (error) {
    console.log("error:", error);
  }
  if (deck < 3) {
    <h3>Not enough cards.</h3>;
    <p>
      You need at least 3 cards to study. There are {deck.cards.length} in this
      deck.
    </p>;
    <AddCardBtns />
  }
  const onClick = (event) => {
    if (button === "flip") {
      // then render the next button ??
      return (
        <button onClick={onClick} button={"next"} className="btn btn-primary">
          Next
        </button>
      );
    }
  };

  return (
    <div>
      <Navbar deck={deck} />
      <h2>Study: {deck.name}</h2>
      <div className="card mb-1">
        <div className="card-body">
          <div className="d-flex w-100">
            <h5 className="card-title">
              Card {deck.cards} of {deck.cards}
            </h5>
          </div>
          <p className="card-text">{deck.front}</p>
          <div class="btn-toolbar ">
            <div class="btn-group">
              <button
                onClick={onClick}
                button={"flip"}
                className="btn btn-secondary"
              >
                Flip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyScreen;
