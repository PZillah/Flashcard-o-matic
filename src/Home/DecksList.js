import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import CreateDeckBtn from "./CreateDeckBtn";
import ViewBtn from "./ViewBtn";
import StudyBtn from "./StudyBtn";
import DeleteBtn from "./DeleteBtn";

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
    <div className="card mb-1">
      <div className="card-body">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="card-title">{deck.name}</h5>
          <small>{deck.cards.length} cards</small>
        </div>
        <p className="card-text">{deck.description}</p>
        <div class="btn-toolbar justify-content-between">
          <div class="btn-group">
            <ViewBtn />
            <StudyBtn deck={deck} />
          </div>
          <div>
            <DeleteBtn idType={"deck"} id={deck.id} reRender={reRender} />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <Route>
        <CreateDeckBtn />
        <br />
        <div>{listOfDecks}</div>
      </Route>
    </div>
  );
};

export default DecksList;
