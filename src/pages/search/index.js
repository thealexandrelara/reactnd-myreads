import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as SearchActions } from '../../store/ducks/search';
import { Creators as BooksActions } from '../../store/ducks/books';

import BookShelf from '../../components/BookShelf';
import { Container, SearchBox, Loading } from './styles';

class Search extends Component {
  static propTypes = {
    searchBooksRequest: PropTypes.func.isRequired,
    searchBooksResetRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    books: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        shelf: PropTypes.string
      })
    ).isRequired,
    error: PropTypes.string
  };

  state = {
    isEmptyQuery: true
  };

  componentDidMount() {
    this.props.getBooksRequest();
  }

  componentWillUnmount() {
    this.props.searchBooksResetRequest();
  }

  handleInputChange = query => {
    this.props.searchBooksRequest(query);

    if (query.trim() === '') {
      this.setState(prevState => ({ isEmptyQuery: true }));
      this.props.searchBooksResetRequest();
    } else {
      this.setState(prevState => ({ isEmptyQuery: false }));
    }
  };

  render() {
    return (
      <Container>
        <SearchBox onChange={this.handleInputChange} />
        {this.props.loading ? (
          <Loading />
        ) : this.props.books.length > 0 ? (
          <BookShelf
            title="Search Results"
            books={this.props.books}
            error={this.props.error}
          />
        ) : (
          this.props.error &&
          !this.state.isEmptyQuery && (
            <h3 className="no-results-found">No results found.</h3>
          )
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  // Get books that are already in shelves
  const booksInShelves = state.books.data;
  const books = state.search.books;

  // For each book returned from the search, check if it is already included in a shelf
  // then set book shelf for each book in order to keep the correct selection in each
  // book item menu
  books.forEach(book => {
    const matchedBook = booksInShelves.find(
      bookInShelves => bookInShelves.id === book.id
    );

    // Set `shelf` property in each book object in order to keep
    // track of the correct selection in each book item in menu
    book.shelf = matchedBook ? matchedBook.shelf : book.shelf || 'none';
  });

  return {
    books,
    error: state.search.error,
    loading: state.search.loading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...SearchActions, ...BooksActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
