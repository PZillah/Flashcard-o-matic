import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import CreateDeckBtn from "./CreateDeckBtn";
import { listDecks } from "../utils/api/index";
import NotFound from "../Layout/NotFound";
import CreateDeck from "../CreateDeckScreen/CreateDeck";

const DecksList = () => {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();

    listDecks(abortController.signal).then(setDecks).catch(setError);

    return () => abortController.abort();
  }, []);

  if (error) {
    return <NotFound />;
  }

  const list = decks.map((deck) => (
    <div className="card mb-2">
      <div className="card-body">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="card-title">{deck.name}</h5>
          <small>{deck.cards.length} cards</small>
        </div>
        <p className="card-text">{deck.description}</p>

        <Link to="/decks/:deckId" className="btn btn-secondary mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
          View
        </Link>
        <Link to="/decks/:deckId/study" className="btn btn-primary mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-journal-bookmark-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"
            />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          </svg>
          Study
        </Link>
        <button type="button" className="btn btn-danger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-trash-fill"
            viewBox="0 0 20 20"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <Switch>
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        <Route exact={true} path="/">
          <CreateDeckBtn />
          <br />
          <div className="container">
            <section className="row">{list}</section>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default DecksList;
