import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import StudyBtn from "../Home/StudyBtn";
import DeleteBtn from "../Home/DeleteBtn";
import AddCardsBtn from "../ViewDeck/AddCardsBtn";
import EditBtn from "../Home/EditBtn";

const DeckScreen = () => {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, []);
  return (
    <div>
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
      <div className="mb-1">
        <div className="card-body">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="card-title">{deck.name}</h5>
          </div>
          <p className="card-text">{deck.description}</p>
          <div className="btn-toolbar justify-content-between">
            <div className="btn-group">
              <EditBtn deck={deck} />
              <StudyBtn deck={deck} />
              <AddCardsBtn deck={deck} />
            </div>
            <div>
            </div>
            <div className="btn-group">
              <DeleteBtn idType={"deck"} id={deck.id} />
            </div>
          </div>
        </div>
      </div>
      <h3>Cards</h3>
    </div>
  );
};

export default DeckScreen;
