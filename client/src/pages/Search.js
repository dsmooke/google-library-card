import React, { useState } from "react";
import API from "../utils/API";
import NavBar from "../components/NavTabs";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

function Search(props) {
  // Component's initial state
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    API.getBooks(query)
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  }

  function saveBook(id) {
    const book = books.find((book) => book.id === id);

    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
    })
      .then((res) => {
        console.log(`Your book (${book.volumeInfo.title}) has been saved.`);
      })
      .catch((err) => console.log(err.response));
  }
  return (
    <div>
      <SearchBar
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      <div>
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
            onClick={() => saveBook(book.id)}
            label="Save"
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
