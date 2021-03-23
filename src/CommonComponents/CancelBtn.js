import React from 'react'
import { useHistory } from "react-router-dom";

const CancelBtn = ({deckId, idType}) => {
    const history = useHistory();
    const onCancel = (event) => {
        if (idType === "cancelcreate") {
            history.push("/");
        }
        else if (idType === "canceledit") {
           history.push(`/decks/${deckId}`)
        }
    return (
        <div>
          <button onClick={onCancel} type="button" className="btn btn-secondary mr-2">
              Cancel
            </button> 
        </div>
    )
}
}

export default CancelBtn;
