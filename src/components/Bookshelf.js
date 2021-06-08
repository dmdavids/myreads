import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  };

  render() {
    const { title, books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id} className="book-in-list">
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
