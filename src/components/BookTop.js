import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";

class BookTop extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired
  };

  render() {
    const { imageUrl } = this.props;

    console.log(imageUrl)
    return (
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <ShelfChanger />
      </div>
    );
  }
}

export default BookTop;
