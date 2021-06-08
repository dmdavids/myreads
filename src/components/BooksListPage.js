import React, { Component } from "react";
import AddABook from "./AddABook";
import BookListPageTitle from "./BookListPageTitle";
import ListContent from "./ListContent";
import PropTypes from "prop-types";

class BooksListPage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  };

  render() {
    const { title, books } = this.props;
    console.log(title)
    console.log(books)
    return (
      <div className="list-books">
        <BookListPageTitle title={title} />
        <ListContent books={books} />
        <AddABook />
      </div>
    );
  }
}

export default BooksListPage;
