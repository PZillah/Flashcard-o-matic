import React, { useState } from "react";

function DeckForm({
  onSubmit,
  onCancel,
  initialState = { name: "", description: "" },
}) {
  const [deck, setDeck] = useState(initialState);

  function handleChange({ target: { name, value } }) {
    setDeck((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit(deck);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              placeholder="Deck Name"
              value={deck.name}
              required={true}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="4"
              required={true}
              placeholder="Brief description of the deck"
              value={deck.description}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
export default DeckForm;
