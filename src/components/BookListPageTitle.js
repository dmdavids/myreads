import React, { Component } from "react";
import PropTypes from "prop-types";

class BookListPageTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const {title} = this.props

    return (
      <div className="list-books-title">
        <h1>{title}</h1>
      </div>
    );
  }
}

export default BookListPageTitle;
