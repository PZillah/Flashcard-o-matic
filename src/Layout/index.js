import React, { useState, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DecksList from "../Home/DecksList";
import CreateDeckScreen from "../CreateDeck/CreateDeckScreen";
import StudyScreen from "../Study/StudyScreen";
import DeckScreen from "../ViewDeck/DeckScreen";
import AddCardScreen from "../AddCard/AddCardScreen";

// Layout for the Home Screen
// <Route> is checking if the exact path is /, then display DecksList on that page

function Layout() {
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/:deckId/cards/new">
            <AddCardScreen />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyScreen
              cards={cards}
              deck={deck}
              decks={decks}
              setCards={setCards}
              setDeck={setDeck}
              setDecks={setDecks}
            />
          </Route>
          <Route path="/decks/new">
            <CreateDeckScreen decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks/:deckId">
            <DeckScreen decks={decks} setDecks={setDecks} />
          </Route>
          <Route exact path="/">
            <DecksList decks={decks} setDecks={setDecks} />
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
