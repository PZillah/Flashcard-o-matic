import React, { useState, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DecksList from "../Home/DecksList";
import CreateDeckScreen from "../CreateDeck/CreateDeckScreen";
import StudyScreen from "../Study/StudyScreen";
import DeckScreen from "../ViewDeck/DeckScreen";

// Layout for the Home Screen
// <Route> is checking if the exact path is /, then display DecksList on that page

function Layout() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);
  const [deck, setDeck] = useState({});

  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/:deckId/study">
            <StudyScreen
              deck={deck}
              decks={decks}
              error={error}
              setDeck={setDeck}
              setDecks={setDecks}
              setError={setError}
            />
          </Route>
          <Route path="/decks/new">
            <CreateDeckScreen
              decks={decks}
              error={error}
              setDecks={setDecks}
              setError={setError}
            />
          </Route>
          <Route path="/decks/:deckId">
            <DeckScreen
              decks={decks}
              error={error}
              setDecks={setDecks}
              setError={setError}
            />
          </Route>
          <Route exact path="/">
            <DecksList
              decks={decks}
              error={error}
              setDecks={setDecks}
              setError={setError}
            />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
