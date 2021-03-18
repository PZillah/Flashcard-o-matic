import React, { useEffect, useState } from "react";
import Navbar from "../Layout/Navbar";
import { useParams } from "react-router-dom";
import { createCard, readDeck, updateDeck } from "../utils/api/index";

const AddCardScreen = () => {
    const [deck, setDeck] = useState({})
    const { deckId } = useParams();
  const initialFormState = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.id]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(deckId, formData)
    setFormData({ ...initialFormState });
  };

  const handleClick = (event) => {
      console.log("go to deck screen")
  }

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal)
    .then(setDeck)
    
      .catch((error) => {
        if (error.name !== "AbortError") {
          throw error;
        }
      });
    return () => abortController.abort();
  }, []);

  return (
    <div>
      <Navbar deck={deck}/>
      <h2>{deck.name}: Add Card</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addfront">
          Front
          <input
            id="front"
            type="textarea"
            
            placeholder="Front side of card"
            onChange={handleChange}
            value={formData.front}
          />
        </label>
        <br />
        <label htmlFor="addback">
          Back
          <input
            id="back"
            type="textarea"
            
            placeholder="Back side of card"
            onChange={handleChange}
            value={formData.back}
          />
        </label>
        <div class="btn-toolbar ">
          <div class="btn-group">
            <button
              onClick={handleSubmit}
              id="save"
              type="submit"
              className="btn btn-primary"
            >
              Save
            </button>
            <button
              onClick={handleClick}
              id="done"
              className="btn btn-secondary"
            >
              Done
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCardScreen;
