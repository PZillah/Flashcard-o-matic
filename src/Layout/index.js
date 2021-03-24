import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DecksList from "../HomeScreen/DecksList";
import StudyScreen from "../Study/StudyScreen";
import Deck from "../ViewDeckScreen/Deck";
import CreateDeckScreen from "../CreateDeckScreen/CreateDeckScreen";
import EditDeckScreen from "../EditDeckScreen/EditDeckScreen";
import CreateCard from "../CommonComponents/CreateCard";
import EditCard from "../CommonComponents/EditCard";
// Layout for the Home Screen
// <Route> is checking if the exact path is /, then display DecksList on that page

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <CreateDeckScreen />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyScreen />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeckScreen />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            {" "}
            {/*Add Card Screen */}
            <CreateCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            {" "}
            {/*Edit Card Screen */}
            <EditCard />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            {" "}
            {/*View Deck Screen*/}
            <Deck />
          </Route>
          <Route exact path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            {" "}
            {/*home page*/}
            <DecksList />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}
export default Layout;
