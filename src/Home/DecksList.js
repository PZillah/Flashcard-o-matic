import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import CreateDeckBtn from "./CreateDeckBtn";
import ViewBtn from "./ViewBtn";
import StudyBtn from "./StudyBtn";
import DeleteBtn from "./DeleteBtn";

const DecksList = ({decks, error, setDecks, setError}) => {
  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);
  if (error) {
    console.log("error:", error);
    }
  // after delete need to rerender the page
  const reRender = () => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
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
