import React, { useState, Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DecksList from "../Home/DecksList";
import StudyScreen from "../Study/StudyScreen";
import DeckScreen from "../ViewDeckScreen/DeckScreen";
import AddEditCardForm from "../ViewDeckScreen/AddEditCardForm";
import AddEditDeckForm from "../ViewDeckScreen/AddEditDeckForm";
import CreateDeckNavTitle from "../ViewDeckScreen/CreateDeckNavTitle";
import EditDeckNavTitle from "../ViewDeckScreen/EditDeckNavTitle";
import AddCardNavTitle from "../ViewDeckScreen/AddCardNavTitle";
import EditCardNavTitle from "../ViewDeckScreen/EditCardNavTitle";

// Layout for the Home Screen
// <Route> is checking if the exact path is /, then display DecksList on that page

function Layout() {
  const [deck, setDeck] = useState({});
  const [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
           <Route path="/decks/:deckId/cards/new"> {/*Add Card Screen */}
            <AddCardNavTitle />
            <AddEditCardForm />
          </Route>
          <Route path="/decks/:deckId/edit"> {/*Edit Deck Screen*/}
            <EditDeckNavTitle />
            <AddEditDeckForm />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit"> {/*Edit Card Screen */}
            <EditCardNavTitle />
            <AddEditCardForm />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyScreen
              cards={cards}
              decks={decks}
              setCards={setCards}
              setDecks={setDecks}
            />
          </Route>
          <Route path="/decks/new"> {/*Create Deck Screen*/}
            <CreateDeckNavTitle id={deck.id} deck={deck}/>
            <AddEditDeckForm />
          </Route>
          <Route path="/decks/:deckId"> {/*Deck Screen*/}
            <DeckScreen />
          </Route>
          <Route exact path="/"> {/*home page*/}
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
