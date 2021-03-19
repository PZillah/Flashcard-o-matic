import React, {useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { updateDeck, readDeck } from "../utils/api/index";

const EditDeckScreen = () => {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
  const initialFormState = {
    name: "",
    description: "",
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
    updateDeck(deckId, formData);
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
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">{deck.name}</li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Deck
            </li>
          </ol>
        </nav>
      </div>
      <h2>Edit Deck</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="deckname">
          Name
          <br />
          <input
            id="name"
            type="text"
            placeholder={deck.name}
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br />
        <label htmlFor="description">
          Description
          <br />
          <textarea
            className="form-control"
            id="description"
            type="textarea"
            placeholder={deck.description}
            onChange={handleChange}
            value={formData.description}
          />
        </label>
        <div>
          <div>
            <a class="btn btn-secondary mr-2" href={`/decks/${deck.id}`} role="button">
              Cancel
            </a>
            <button
              onClick={handleSubmit}
              id="save"
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditDeckScreen;
