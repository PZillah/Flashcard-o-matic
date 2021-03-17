import React from "react";
import { Link } from "react-router-dom";

const AddCardBtns = () => {
  return (
    <div>
      <Link to="/decks/:deckId/cards/new" className="btn btn-secondary btn-lg">
        + Add Cards
      </Link>
    </div>
  );
};

export default AddCardBtns;
