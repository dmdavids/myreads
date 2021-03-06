import React, { Component } from "react";
import PropTypes from "prop-types";

class ShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  handleChange(event) {
    event.preventDefault();
    const updatedBook = { ...this.props.book, shelf: event.target.value };
    this.props.onUpdate(updatedBook);
  }

  render() {
    const { book } = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
