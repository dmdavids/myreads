import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchResults extends Component {
  static propTypes = {
    results: PropTypes.array,
  };

  render() {
    const { results } = this.props;

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {results.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default SearchResults;
