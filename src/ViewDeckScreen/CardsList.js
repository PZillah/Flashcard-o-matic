import React, { useEffect} from "react";
import EditBtn from "../CommonComponents/DeleteBtn";
import DeleteBtn from "../CommonComponents/DeleteBtn";
import { listCards } from "../utils/api/index";

const CardsList = ({ deck, cards, setCards }) => {
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listCards(signal)
      .then(setCards)
      .catch((error) => {
        if (error.name !== "AbortError") {
          throw error;
        }
      });
    return () => abortController.abort();
  }, []);

  // after delete need to rerender the page
  const reRender = () => {
    const abortController = new AbortController();
    listCards(abortController.signal).then(setCards);
  };
  const listOfCards = deck.cards.map((card) => (
    <div className="card">
      <div className="card-body">
        <div className="d-flex w-100 justify-content-between">
          <p className="card-text">{card.front}</p>
        </div>
        <p className="card-text">{card.back}</p>
        <div class="btn-toolbar justify-content-between">
          <div class="btn-group">
            <EditBtn />
          </div>
          <div>
            <DeleteBtn idType={"card"} id={card.id} reRender={reRender} />
          </div>
        </div>
      </div>
    </div>
  ));
  return <div>{listOfCards}</div>;
};

export default CardsList;
