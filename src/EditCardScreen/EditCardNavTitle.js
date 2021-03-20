import React from 'react'
import { Link } from "react-router-dom";

const EditCardNavTitle = ({deck}) => {
    return (
        <div>
         <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              Deck {deck.name}
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Card {deck.card.id}
            </li>
          </ol>
        </nav>
      </div>
      <h2>Edit Card</h2>   
        </div>
    )
}

export default EditCardNavTitle;
