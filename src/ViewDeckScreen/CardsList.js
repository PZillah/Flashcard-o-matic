import React from "react";
// import EditBtn from "../CommonComponents/DeleteBtn";
// import DeleteBtn from "../CommonComponents/DeleteBtn";
import { Link } from "react-router-dom";

//import { listCards } from "../utils/api/index";

// const CardsList = ({ deck  }) => {
// useEffect(() => {
//   const abortController = new AbortController();
//   const signal = abortController.signal;
//   listCards(signal)
//     .then(setCards)
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
//   listCards(abortController.signal).then(setCards);
// };
function CardsList({ deck, onCardDelete }) {
  const { cards = [] } = deck;
  const listOfCards = cards.map((card) => (
    <li
      key={card.id}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="row">
        <div className="col-md-10">
          <div className="row">
            <div className="col">{card.front}</div>
            <div className="col">{card.back}</div>
          </div>
        </div>
        <div className="btn-group">
          <div className="col text-right">
            <Link
              to={`/decks/${deck.id}/cards/${card.id}/edit`}
              className="btn btn-secondary mr-2"
              title="Edit Card"
            >
              <span className="oi oi-pencil" /> Edit
            </Link>
            <button className="btn btn-danger" title="Delete Card">
              <span
                className="oi oi-trash"
                onClick={() => onCardDelete(card.id)}
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  ));
  return (
    <div className="mt-4 card-list">
      <h3>Cards</h3>
      <ul className="list-group">{listOfCards}</ul>
    </div>
  );
}
export default CardsList;
