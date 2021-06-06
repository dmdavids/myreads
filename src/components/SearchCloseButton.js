import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchCloseButton extends Component {
  static propTypes = {
    onCompleted: PropTypes.func.isRequired,
  };

  render() {
    const { onCompleted } = this.props;

    return (
      <button className="close-search" onClick={onCompleted}>
        Close
      </button>
    );
  }
}

export default SearchCloseButton;