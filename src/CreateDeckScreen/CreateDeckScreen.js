import React from "react";
import { useHistory, Link } from "react-router-dom";
import DeckForm from "../CommonComponents/DeckForm";
import { createDeck } from "../utils/api";

function CreateDeckScreen() {
  const history = useHistory();

  function submitHandler(deck) {
    createDeck(deck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }
  function cancel() {
    history.goBack();
  }
  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          </ol>
        </nav>
      </div>
      <h2>Create Deck</h2>
      <DeckForm
        idType="cancelcreate"
        onCancel={cancel}
        onSubmit={submitHandler}
      />
    </div>
  );
}
export default CreateDeckScreen;
