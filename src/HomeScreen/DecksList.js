import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api";

// import ViewBtn from "../CommonComponents/ViewBtn";
// import StudyBtn from "../CommonComponents/StudyBtn";
// import DeleteBtn from "../CommonComponents/DeleteBtn";

// const DecksList = () => {

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const signal = abortController.signal;

  //   listDecks(signal)
  //     .then(setDecks)
  //     .catch((error) => {
  //       if (error.name !== "AbortError") {
  //         throw error;
  //       }
  //     });
  //   return () => abortController.abort();
  // }, []);
  // after delete need to rerender the page
  // const reRender = () => {
  //   const abortController = new AbortController();
  //   listDecks(abortController.signal).then(setDecks);
  // };

//   const listOfDecks = decks.map((deck) => (
//     <div className="card" key={deck.id}>
//       <div className="card-body">
//         <div className="d-flex w-100 justify-content-between">
//           <h5 className="card-title">{deck.name}</h5>
//           <small>{deck.cards.length} cards</small>
//         </div>
//         <p className="card-text">{deck.description}</p>
//         <div className="btn-toolbar justify-content-between">
//           <div className="btn-group">
//             <ViewBtn id={deck.id} />
//             <StudyBtn deck={deck} />
//           </div>
//           <div>
//             {/* <DeleteBtn idType={"deck"} id={deck.id} reRender={reRender} /> */}
//             <DeleteBtn idType={"deck"} id={deck.id}  />
//           </div>
//         </div>
//       </div>
//     </div>
//   ));
//   return <div>{listOfDecks}</div>;
// };

function DecksList() {
  const [decks, setDecks] = useState([]);

  useEffect(loadDecks, []);
  function deleteHandler(deckId) {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deckId).then(loadDecks);
    }
  }

  function loadDecks() {
    listDecks().then(setDecks);
  }
  
  const listOfDecks = decks.map((deck) => (
    <li
      key={deck.id}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{deck.name}</h5>
        <small>{deck.cards.length} cards</small>
      </div>
      <p className="mb-1">{deck.description}</p>
      <Link
        to={`/decks/${deck.id}`}
        className="btn btn-secondary mr-2"
        title="Edit deck"
      >
        <span className="oi oi-eye" /> View
      </Link>
      <Link
        to={`/decks/${deck.id}/study`}
        className="btn btn-primary"
        title="Study deck"
      >
        <span className="oi oi-book" /> Study
      </Link>
      <button
        className="btn btn-danger float-right"
        title="Delete deck"
        onClick={() => deleteHandler(deck.id)}
      >
        <span className="oi oi-trash" />
      </button>
    </li>
  ));

  return (
    <>
      <Link to="/decks/new" className="btn btn-secondary">
        <span className="oi oi-plus" /> Create Deck
      </Link>
      <ul className="list-group mt-2 deck-list">{listOfDecks}</ul>
    </>
  );
}
export default DecksList;