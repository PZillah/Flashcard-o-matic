import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createDeck, readDeck } from "../utils/api/index";

const CreateDeck = () => {
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
    createDeck(deck, formData);
    setFormData({ ...initialFormState });
  };
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   readDeck(deckId, abortController.signal)
  //     .then(setDeck)
  //     .catch((error) => {
  //       if (error.name !== "AbortError") {
  //         throw error;
  //       }
  //     });
  //   return () => abortController.abort();
  // }, []);
  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          </ol>
        </nav>
      </div>
      <h2>Create Deck</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="deckname">
          Name
          <br />
          <input
            id="name"
            type="text"
            placeholder="Deck Name"
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
            placeholder="Brief description of the deck"
            onChange={handleChange}
            value={formData.description}
          />
        </label>
        <div>
          <div>
            <a class="btn btn-secondary mr-2" href="/" role="button">
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

export default CreateDeck;
