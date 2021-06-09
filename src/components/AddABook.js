import React, { Component } from "react";
import PropTypes from "prop-types";

class AddABook extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  render() {
    const { onAdd } = this.props;

    return (
      <div className="open-search">
        <button onClick={() => onAdd()}>Add a book</button>
      </div>
    );
  }
}

export default AddABook;
