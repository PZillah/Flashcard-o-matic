import React, { useState, Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DecksList from "../HomeScreen/DecksList";
import StudyScreen from "../Study/StudyScreen";
import Deck from "../ViewDeckScreen/Deck";
import AddEditCardForm from "../CommonComponents/AddEditCardForm";
import AddEditDeckForm from "../CommonComponents/AddEditDeckForm";
import CreateDeckBtn from "../HomeScreen/CreateDeckBtn";
import CreateDeckNavTitle from "../CreateDeckScreen/CreateDeckNavTitle";
import EditDeckNavTitle from "../EditDeckScreen/EditDeckNavTitle";
import AddCardNavTitle from "../AddCardScreen/AddCardNavTitle";
import EditCardNavTitle from "../EditCardScreen/EditCardNavTitle";

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
            <EditDeckNavTitle deck={deck}/>
            <AddEditDeckForm />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit"> {/*Edit Card Screen */}
            <EditCardNavTitle />
            <AddEditCardForm />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyScreen />
          </Route>
          <Route path="/decks/new"> {/*Create Deck Screen*/}
            <CreateDeckNavTitle id={deck.id} deck={deck}/>
            <AddEditDeckForm />
          </Route>
          <Route path="/decks/:deckId"> {/*Deck Screen*/}
            <Deck deck={deck} id={deck.id}/>
          </Route>
          <Route exact path="/"> {/*home page*/}
            <CreateDeckBtn />
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
