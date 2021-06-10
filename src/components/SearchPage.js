import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";

class SearchPage extends Component {
  static propTypes = {
    onSearchCompleted: PropTypes.func.isRequired,
    onSearchBooks: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    results: PropTypes.array,
  };

  render() {
    const { onSearchCompleted, onSearchBooks, onUpdate, results } = this.props;

    return (
      <div className="search-books">
        <SearchBar onSearchCompleted={onSearchCompleted} onSearchBooks={onSearchBooks}/>
        <SearchResults results={results} onUpdate={onUpdate}/>
      </div>
    );
  }
}

export default SearchPage;
