import React, { Component } from "react";
import SearchInput from "./SearchInput";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => this.setState({ showSearchPage: false })}
        >
          Close
        </button>
        <SearchInput />
      </div>
    );
  }
}

export default SearchBar;
