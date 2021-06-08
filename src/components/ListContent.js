import React, { Component } from "react";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

class ListContent extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    const { books } = this.props;

    console.log(books);

    return (
      <div className="list-books-content">
        <div>
          <Bookshelf />
          <Bookshelf />
        </div>
      </div>
    );
  }
}

export default ListContent;
