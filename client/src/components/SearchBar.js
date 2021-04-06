import React from "react";

function SearchBar(props) {
  return (
    <div>
      <h3>Search Book</h3>
      <input
        className="form-control"
        onChange={props.handleInputChange}
        value={props.value}
        type="search"
        placeholder="Search for a book"
        aria-label="Search"
      ></input>
      <button
        className="btn-primary submit-btn"
        onClick={props.handleFormSubmit}
        type="submit"
      ></button>
    </div>
  );
}

export default SearchBar;
