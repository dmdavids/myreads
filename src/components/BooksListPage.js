import React, { Component } from "react";
import AddABook from "./AddABook";
import BookListPageTitle from "./BookListPageTitle";
import ListContent from "./ListContent";

class BooksListPage extends Component {
  render() {
    return (
      <div className="list-books">
        <BookListPageTitle />
        <ListContent />
        <AddABook />
      </div>
    );
  }
}

export default BooksListPage;
