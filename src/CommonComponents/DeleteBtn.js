import React from "react";
import { deleteDeck, deleteCard } from "../utils/api/index";
import { useHistory } from "react-router-dom";

// How to know if user wants to delete deck or card? // pass in props
// idType = deck or card

const DeleteBtn = ({ idType, id, reRender }) => {
  const history = useHistory();
  const onClick = (event) => {
    if (
      window.confirm(
        `Delete this ${idType}?\n\nYou will not be able to recover it.`
      )
    ) {
      if (idType === "deck") {
        deleteDeck(id)
          .then(reRender)
          .then(() => {
            history.push("/");
          });
      }
      if (idType === "card") {
        deleteCard(id)
          .then(reRender)
          .then(() => {
            history.push("/");
          });
      }
    }
  };

  return (
    <div>
      <button onClick={onClick} type="button" className="btn btn-danger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-trash-fill"
          viewBox="0 0 20 20"
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </button>
    </div>
  );
};

export default DeleteBtn;
