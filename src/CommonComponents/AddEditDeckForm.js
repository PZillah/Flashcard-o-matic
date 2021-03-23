import React, {useState } from "react";
// import { useParams } from "react-router-dom";
// import { updateDeck, readDeck } from "../utils/api/index";
// import CancelBtn from "../CommonComponents/CancelBtn";
// const AddEditDeckForm = (idType) => {

function AddEditDeckForm({onSubmit, onCancel, initialState = {name: "", description: "" }}) {
  const [deck, setDeck] = useState(initialState);
  // const { deckId } = useParams();
  // const initialFormState = {
  //   name: "",
  //   description: "",
  // };
  // const [formData, setFormData] = useState({ ...initialFormState });
  function handleChange({ target : {name, value} }) {
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
  // const handleChange = ({ target }) => {
  //   setFormData({
  //     ...formData,
  //     [target.id]: target.value,
  //   });
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   updateDeck(deckId, formData);
  //   setFormData({ ...initialFormState });
  // };
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
};
export default AddEditDeckForm;