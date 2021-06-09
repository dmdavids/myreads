import React, { Component } from "react";
import BooksGrid from "./BooksGrid"
import PropTypes from "prop-types";

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  render() {
    const { title, books, onUpdate } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={books} onUpdate={onUpdate}/>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
