import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import StudyNavTitle from "./StudyNavTitle";
import AddCardsBtn from "../ViewDeckScreen/AddCardsBtn";

const StudyScreen = () => {
  const [deck, setDeck] = useState({});
  const [cardIndex, setCardIndex] = useState(0);
  const [frontSide, setFrontSide] = useState(true);
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);
  if (Object.keys(deck).length === 0) return null;
  if (!deck.cards) {
    return null;
  }
  const NotEnoughMessage = (
    <div>
      <StudyNavTitle deck={deck} />
      <h3>Not enough cards.</h3>
      <p>
        You need at least 3 cards to study. There are {deck.cards.length} in
        this deck.
      </p>
      <AddCardsBtn deck={deck} />
    </div>
  );
  const handleFlip = (event) => {
    setFrontSide(!frontSide);
  };
  const handleNext = (event) => {
    if (cardIndex < deck.cards.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      if (
        window.confirm(
          `Restart cards?\n\nClick 'cancel' to return to the home page.`
        )
      ) {
        setCardIndex(0);
      } else {
        history.push("/");
      }
    }
    setFrontSide(true);
  };
  const renderNextBtn = () => {
    if (frontSide === false) {
      return (
        <button onClick={handleNext} id="next" className="btn btn-primary">
          Next
        </button>
      );
    } else {
      return null;
    }
  };
  if (deck.cards.length < 3) {
    return NotEnoughMessage;
  } else if (deck.cards.length >= 3) {
    return (
      <div>
        <StudyNavTitle deck={deck} />
        <div className="card mb-1">
          <div className="card-body">
            <div className="d-flex w-100">
              <h5 className="card-title">
                Card {cardIndex + 1} of {deck.cards.length}
              </h5>
            </div>
            {frontSide === true ? (
              <p className="card-text">{deck.cards[cardIndex].front}</p>
            ) : (
              <p className="card-text">{deck.cards[cardIndex].back}</p>
            )}
            <div className="btn-toolbar ">
              <div className="btn-group">
                <button
                  onClick={handleFlip}
                  id="flip"
                  className="btn btn-secondary"
                >
                  Flip
                </button>
                {renderNextBtn()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default StudyScreen;
