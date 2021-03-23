import React from 'react';
import { useHistory } from "react-router-dom";
import CreateDeckNavTitle from "../CreateDeckScreen/CreateDeckNavTitle";
import AddEditDeckForm from "../CommonComponents/AddEditDeckForm";
import { createDeck } from "../utils/api";

function CreateDeckScreen() {
    const history = useHistory();

    function submitHandler(deck) {
        createDeck(deck).then((savedDeck) =>
          history.push(`/decks/${savedDeck.id}`)
        );
    }
    function cancel() {
        history.goBack();
    }
    return (
        <div>
            <CreateDeckNavTitle/>
            <AddEditDeckForm  
                idType="cancelcreate" 
                onCancel={cancel} 
                onSubmit={submitHandler}
            />
        </div>
    )
}
export default CreateDeckScreen;