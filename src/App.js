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
    BooksAPI.getAll().then((result) => {
      console.log(result)
      this.setState(() => ({ 
        books: result
       }));
    });
  }

  getBook = (bookId) => {
    BooksAPI.get(bookId).then((book) => {
      this.setState(() => ({ currentBook: book }));
    });
  };

  search = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState(() => ({ searchResults: books }));
    });
  };

  onSearchCompleted = () => {
    //  TODO: fix this to work with the URL instead
    this.setState({ showSearchPage: false });
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            onSearchCompleted={this.onSearchCompleted}
            searchBooks={this.search}
            results={this.state.searchResults}
          />
        ) : (
          <BooksListPage title="MyReads" books={this.state.books} />
        )}
      </div>
    );
  }
}

export default BooksApp;
