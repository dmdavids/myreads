import React, { Component } from "react";
import BooksGrid from "./BooksGrid"
import PropTypes from "prop-types";

class SearchResults extends Component {
  static propTypes = {
    results: PropTypes.array,
    onUpdate: PropTypes.func.isRequired,
  };

  render() {
    const { results, onUpdate } = this.props;

    return (
      <div className="search-books-results">
          <BooksGrid books={results} onUpdate={onUpdate}/>
      </div>
    );
  }
}

export default SearchResults;
