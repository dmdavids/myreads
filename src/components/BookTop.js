import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";

class BookTop extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  render() {
    const { book, onUpdate } = this.props;

    console.log(book.imageLinks.thumbnail)
    return (
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}
        />
        <ShelfChanger book={book} onUpdate={onUpdate}/>
      </div>
    );
  }
}

export default BookTop;
