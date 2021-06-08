import React, { Component } from "react";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

class ListContent extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    const { books } = this.props;
    const categories = [...new Set(books.map((b) => (b.shelf)))]

    return (
      <div className="list-books-content">
        <div>
          { categories.map((category) => (
            <Bookshelf title={`${category}`} books={books.filter((b) => b.shelf === `${category}`)} />
          ))
        }
        </div>
      </div>
    );
  }
}

export default ListContent;
