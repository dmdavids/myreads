import React, { Component } from "react";
import BookTop from "./BookTop";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  render() {
    const { book, onUpdate } = this.props;

    return (
      <div className="book">
        <BookTop
          book={book}
          onUpdate={onUpdate}
        />
        <div className="book-title">{book.title}</div>
        {book.authors.map((author) => (
          <div className="book-authors" key={author}>{author}</div>
        ))}
      </div>
    );
  }
}

export default Book;
