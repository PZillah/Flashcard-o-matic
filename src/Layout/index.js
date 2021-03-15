import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DecksList from "../Home/DecksList";



// Layout for the Home Screen
// <Route> is checking if the exact path is /, then display DecksList

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DecksList />
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
