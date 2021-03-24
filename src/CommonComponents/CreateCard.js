import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck, createCard } from "../utils/api/index";
import CardForm from "./CardForm";

function CreateCard() {
  const history = useHistory();
  const { deckId } = useParams();

  const [deck, setDeck] = useState({ cards: [] });
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);
  function handleSubmit(card) {
    createCard(deckId, card);
  }
  function doneHandler() {
    history.push(`/decks/${deckId}`);
  }
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <CardForm
        onDone={doneHandler}
        onSubmit={handleSubmit}
        deckName={deck.name}
        initialState={deck}
      />
    </>
  );
}
export default CreateCard;
