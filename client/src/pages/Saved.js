import React, { useState, useEffect } from "react";
import API from "../utils/API";
import NavBar from "../components/NavTabs";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

function Saved() {
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadSavedBooks();
  }, []);

  // Loads all books and sets them to books
  function loadSavedBooks() {
    API.getSavedBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(() => loadSavedBooks())
      .catch((err) => console.error(err));
  }
  console.log(books); // @remind - comment out

  return (
    <div>
      <h5>Saved Books</h5>
      <div>
        {books.map((book) => (
          <BookCard
            key={book._id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
            onClick={() => deleteBook(book._id)}
            label="Delete"
          ></BookCard>
        ))}
      </div>
    </div>
  );
}

export default Saved;
