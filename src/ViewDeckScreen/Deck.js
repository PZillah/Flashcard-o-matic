import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import StudyBtn from "../CommonComponents/StudyBtn";
import AddCardsBtn from "./AddCardsBtn";
import EditBtn from "../CommonComponents/EditBtn";
import CardsList from "../ViewDeckScreen/CardsList";
import { deleteDeck, deleteCard, readDeck } from "../utils/api";
//parent of the add/edit screens

function Deck() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });
  useEffect(loadDeck, [deckId]);

  function loadDeck() {
    readDeck(deckId).then(setDeck);
  }

  function handleDelete() {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deck.id).then(() => history.push("/decks"));
    }
  }

  function deleteCardHandler(cardId) {
    const confirmed = window.confirm(
      "Delete this card?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      console.log("deleteCardHandler", confirmed, cardId);
      deleteCard(cardId).then(loadDeck);
    }
  }
  return (
    <main className="container deck-view">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>

      <div className="media mb-2">
        <div className="media-body">
          <h5 className="mt-0">{deck.name}</h5>
          {deck.description}
        </div>
      </div>
      <div className="btn-group mb-2">
        <EditBtn deck={deck} />
        <StudyBtn deck={deck} />
        <AddCardsBtn deck={deck} />
      </div>
      <button className="btn btn-danger float-right" title="Delete deck">
        <span className="oi oi-trash" onClick={handleDelete} />
      </button>
      <CardsList deck={deck} onCardDelete={deleteCardHandler} />
    </main>
  );
}

export default Deck;
