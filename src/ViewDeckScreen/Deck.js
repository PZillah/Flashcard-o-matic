import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import StudyBtn from "../CommonComponents/StudyBtn";
import DeleteBtn from "../CommonComponents/DeleteBtn";
import AddCardsBtn from "./AddCardsBtn";
import EditBtn from "../CommonComponents/EditBtn";
import CardsList from "../ViewDeckScreen/CardsList";
//parent of the add/edit screens
const Deck = ({cards, setCards}) => {
  const [deck, setDeck] = useState({ cards: [] });
  
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <div className="mb-1">
        <div className="card-body">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="card-title">{deck.name}</h5>
          </div>
          <p className="card-text">{deck.description}</p>
          <div className="btn-toolbar justify-content-between">
            <div className="btn-group">
              <EditBtn deck={deck} />
              <StudyBtn deck={deck} />
              <AddCardsBtn deck={deck} />
            </div>
            <div className="btn-group">
              <DeleteBtn idType={"deck"} id={deck.id} />
            </div>
            <div>
            <h3>Cards</h3>
            </div>
            <div>
            <CardsList cards={cards} setCards={setCards} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deck;
