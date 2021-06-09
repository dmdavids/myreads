import React, { Component } from "react";
import AddABook from "./AddABook";
import BookListPageTitle from "./BookListPageTitle";
import ListContent from "./ListContent";
import PropTypes from "prop-types";

class BooksListPage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  render() {
    const { title, books, categories, onAdd, onUpdate } = this.props;
    console.log(title)
    console.log(books)
    console.log(categories)
    return (
      <div className="list-books">
        <BookListPageTitle title={title} />
        <ListContent books={books} categories={categories} onUpdate={onUpdate} />
        <AddABook onAdd={onAdd}/>
      </div>
    );
  }
}

export default BooksListPage;
