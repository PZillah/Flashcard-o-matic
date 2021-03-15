import React from "react";
import { Link } from "react-router-dom";

const CreateDeckBtn = () => {
  return (
    <div>
      <Link to="/decks/new" className="btn btn-secondary btn-lg">
        + Create Deck
      </Link>
    </div>
  );
};

export default CreateDeckBtn;
