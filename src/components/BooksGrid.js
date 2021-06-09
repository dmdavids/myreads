import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  render() {
    const { books, onUpdate } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id} className="book-in-list">
            <Book book={book} onUpdate={onUpdate} />
          </li>
        ))}
      </ol>
    );
  }
}

export default BooksGrid;
