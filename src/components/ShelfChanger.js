import React, { Component } from "react";
import PropTypes from "prop-types";

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  render() {
    const { book, onUpdate } = this.props

    return (
      <div className="book-shelf-changer">
      <select value={book.shelf} >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
    )
  }
}

export default ShelfChanger;