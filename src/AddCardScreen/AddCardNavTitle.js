import React from "react";
import { Link } from "react-router-dom";

const AddCardNavTitle = ({deck}) => {
  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
      </div>
      <h2>{deck.name}: Add Card</h2>
    </div>
  );
};

export default AddCardNavTitle;
