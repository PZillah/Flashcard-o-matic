import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createCard, readDeck } from "../utils/api/index";

const AddEditCardForm = () => {
  const [deck, setDeck] = useState({});
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
    createCard(deckId, formData).then((response) => {
        deck.cards.push(response)
    })
    .catch((error) => {
        if (error.name !== "AbortError") {
          throw error;
        }
      });
    setFormData({ ...initialFormState });
  };

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

      <form onSubmit={handleSubmit}>
        <label htmlFor="addfront">
          Front
          <br />
          <textarea
            className="form-control"
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
          <br />
          <textarea
            className="form-control"
            id="back"
            type="textarea"
            placeholder="Back side of card"
            onChange={handleChange}
            value={formData.back}
          />
        </label>
        <div>
          <div>
            <a
              class="btn btn-secondary mr-2"
              href={`/decks/${deck.id}`}
              role="button"
            >
              Done
            </a>
            <button
              onClick={handleSubmit}
              id="save"
              type="submit"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEditCardForm;
