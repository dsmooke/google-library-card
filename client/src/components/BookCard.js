import React from "react";

function BookCard(props) {
  return (
    <div className="col-12">
      <div className="card" key={props.id}>
        <div className="row">
          <h5>{props.title}</h5>
          <p className="authors">
            Authors: {props.authors ? props.authors.join(`, `) : "Unknown"}
          </p>
          <p className="description">Description: {props.description}</p>
          <img className="img-thumbnail" src={props.image} alt={props.title} />
          <button>
            <a href={props.link} target="_blank" rel="noreferrer">
              View
            </a>
          </button>
          <button>
            <a href={props.link} target="_blank" rel="noreferrer">
              Save
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
