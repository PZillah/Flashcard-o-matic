import React from 'react'
import { Link } from "react-router-dom";

function EditDeckNavTitle({child}) {
  
  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">{child.name}</li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Deck
            </li>
          </ol>
        </nav>
      </div>
      <h2>Edit Deck</h2>
      {child}
    </div>
  )
}
export default EditDeckNavTitle;