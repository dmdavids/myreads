import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  static propTypes = {
    onSearchBooks: PropTypes.func.isRequired,
  };

  state = {
    validSearchTerms: [
      "android",
      "art",
      "artificial intelligence",
      "astronomy",
      "austen",
      "baseball",
      "basketball",
      "bhagat",
      "biography",
      "brief",
      "business",
      "camus",
      "cervantes",
      "christie",
      "classics",
      "comics",
      "cook",
      "cricket",
      "cycling",
      "desai",
      "design",
      "development",
      "digital marketing",
      "drama",
      "drawing",
      "dumas",
      "education",
      "everything",
      "fantasy",
      "film",
      "finance",
      "first",
      "fitness",
      "football",
      "future",
      "games",
      "gandhi",
      "homer",
      "horror",
      "hugo",
      "ibsen",
      "journey",
      "kafka",
      "king",
      "lahiri",
      "larsson",
      "learn",
      "literary fiction",
      "make",
      "manage",
      "marquez",
      "money",
      "mystery",
      "negotiate",
      "painting",
      "philosophy",
      "photography",
      "poetry",
      "production",
      "programming",
      "react",
      "redux",
      "river",
      "robotics",
      "rowling",
      "satire",
      "science fiction",
      "shakespeare",
      "singh",
      "swimming",
      "tale",
      "thrun",
      "time",
      "tolstoy",
      "travel",
      "ultimate",
      "virtual reality",
      "web development",
      "ios",
    ],
  };

  handleChange(event) {
    event.preventDefault();
    let query = event.target.value
    console.log(query.toLowerCase());
    if (this.state.validSearchTerms.includes(query.toLowerCase())) {
      console.log("query is valid.. searching for it");
      this.props.onSearchBooks(query.toLowerCase());
    } else {
      console.log("query is not valid ..clearing results");
      this.props.onSearchBooks("");
    }
  }

  render() {
    return (
      <div className="search-books-input-wrapper">
        {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */}
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchInput;
