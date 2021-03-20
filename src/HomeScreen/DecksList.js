import React, { useEffect } from "react";
import { listDecks } from "../utils/api/index";
import ViewBtn from "../CommonComponents/ViewBtn";
import StudyBtn from "../CommonComponents/StudyBtn";
import DeleteBtn from "../CommonComponents/DeleteBtn";

const DecksList = ({ decks, setDecks }) => {
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    listDecks(signal)
      .then(setDecks)
      .catch((error) => {
        if (error.name !== "AbortError") {
          throw error;
        }
      });
    return () => abortController.abort();
  }, []);

  // after delete need to rerender the page
  const reRender = () => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks);
  };
  const listOfDecks = decks.map((deck) => (
    <div className="card">
      <div className="card-body">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="card-title">{deck.name}</h5>
          <small>{deck.cards.length} cards</small>
        </div>
        <p className="card-text">{deck.description}</p>
        <div class="btn-toolbar justify-content-between">
          <div class="btn-group">
            <ViewBtn id={deck.id} />
            <StudyBtn deck={deck} />
          </div>
          <div>
            <DeleteBtn idType={"deck"} id={deck.id} reRender={reRender} />
          </div>
        </div>
      </div>
    </div>
  ));
  return <div>{listOfDecks}</div>;
};

export default DecksList;
