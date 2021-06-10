import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksListPage from "./components/BooksListPage";
import SearchPage from "./components/SearchPage";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    books: [],
    currentBook: {},
    searchResults: [],
  };

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    BooksAPI.getAll().then((result) => {
      console.log(result);
      this.setState(() => ({
        books: result,
      }));
    });
  };

  getBook = (bookId) => {
    BooksAPI.get(bookId).then((book) => {
      this.setState(() => ({ currentBook: book }));
    });
  };

  clearSearchResults = () => {
    console.log("clearing query");
    this.setState(() => ({ searchResults: [] }));
  }

  onSearchBooks = (query) => {
    if (query === "") {
      this.clearSearchResults()
    } else {
      BooksAPI.search(query).then((books) => {
        console.log(books);
        this.setState(() => ({ searchResults: books }));
      });
    }
  };

  testSearchBooks = (query) => {
    console.log(`testing ...this is a test ${query}`);
  };

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAll();
    });
  };

  onSearchCompleted = () => {
    //  TODO: fix this to work with the URL instead
    this.clearSearchResults()
    this.setState({ showSearchPage: false });
  };

  onAdd = () => {
    //  TODO: fix this to work with the URL instead
    this.setState({ showSearchPage: true });
  };

  onUpdate = (book) => {
    console.log(
      `book to be updated is ${book.title} with shelf = ${book.shelf}`
    );
    this.update(book, book.shelf);
  };

  categories = [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want to Read" },
    { id: "read", title: "Read" },
  ];

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            onSearchCompleted={this.onSearchCompleted}
            onSearchBooks={this.onSearchBooks}
            onUpdate={this.onUpdate}
            results={this.state.searchResults}
          />
        ) : (
          <BooksListPage
            title="MyReads"
            books={this.state.books}
            categories={this.categories}
            onAdd={this.onAdd}
            onUpdate={this.onUpdate}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
