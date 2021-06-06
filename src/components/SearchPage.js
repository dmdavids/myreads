import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";

class SearchPage extends Component {
  static propTypes = {
    onSearchCompleted: PropTypes.func.isRequired,
  };

  render() {
    const { onSearchCompleted } = this.props;

    return (
      <div className="search-books">
        <SearchBar onSearchCompleted={onSearchCompleted} />
        <SearchResults />
      </div>
    );
  }
}

export default SearchPage;
