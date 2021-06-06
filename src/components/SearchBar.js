import React, { Component } from "react";
import SearchCloseButton from "./SearchCloseButton";
import SearchInput from "./SearchInput";
import PropTypes from "prop-types";

class SearchBar extends Component {
  static propTypes = {
    onSearchCompleted: PropTypes.func.isRequired,
  };

  render() {

    const { onSearchCompleted } = this.props;

    return (
      <div className="search-books-bar">
        <SearchCloseButton onCompleted={ onSearchCompleted } />
        <SearchInput />
      </div>
    );
  }
  
}

export default SearchBar;
