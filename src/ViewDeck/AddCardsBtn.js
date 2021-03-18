import React from "react";
import { Link } from "react-router-dom";

const AddCardBtns = ({deck}) => {
  if(!deck) return null;

  return (
    <div>
      <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-secondary btn-lg">
        + Add Cards
      </Link>
    </div>
  );
};

export default AddCardBtns;
