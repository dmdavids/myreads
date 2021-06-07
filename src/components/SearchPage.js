import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";

class SearchPage extends Component {
  static propTypes = {
    onSearchCompleted: PropTypes.func.isRequired,
    searchBooks: PropTypes.func.isRequired,
    results: PropTypes.array
  };

  render() {
    const { onSearchCompleted, searchBooks, results } = this.props;

    return (
      <div className="search-books">
        <SearchBar onSearchCompleted={onSearchCompleted} searchBooks={searchBooks}/>
        <SearchResults results={results} />
      </div>
    );
  }
}

export default SearchPage;
