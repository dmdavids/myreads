import React, { Component } from "react";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

class ListContent extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  render() {
    const { books, categories, onUpdate } = this.props;

    return (
      <div className="list-books-content">
        <div>
          {categories.map((category) => (
            <Bookshelf key={category.id}
              title={`${category.title}`}
              books={books.filter((b) => b.shelf === `${category.id}`)}
              onUpdate= {onUpdate}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListContent;
