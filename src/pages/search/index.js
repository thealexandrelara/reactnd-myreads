import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as SearchActions } from '../../store/ducks/search';

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
        authors: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        subtitle: PropTypes.subtitle,
        shelf: PropTypes.string,
        readingModes: PropTypes.shape({
          text: PropTypes.bool,
          image: PropTypes.bool
        }),
        ratingsCount: PropTypes.number,
        publisher: PropTypes.string,
        publishedDate: PropTypes.string,
        printType: PropTypes.string,
        previewLink: PropTypes.string,
        pageCount: PropTypes.number,
        language: PropTypes.string,
        maturityRating: PropTypes.string,
        infoLink: PropTypes.string,
        imageLinks: PropTypes.shape({
          smallThumbnail: PropTypes.string,
          thumbnail: PropTypes.string
        }),
        description: PropTypes.string,
        contentVersion: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
        canonicalVolumeLink: PropTypes.string,
        averageRating: PropTypes.number,
        allowAnonLogging: PropTypes.bool
      })
    ).isRequired,
    error: PropTypes.string
  };

  componentWillUnmount() {
    this.props.searchBooksResetRequest();
  }

  handleInputChange = query => {
    console.log('query: ', query);
    this.props.searchBooksRequest(query);

    if (query.trim() === '') {
      this.props.searchBooksResetRequest();
    }
  };

  render() {
    return (
      <Container>
        <SearchBox onChange={this.handleInputChange} />
        {this.props.loading ? (
          <Loading />
        ) : (
          this.props.books.length > 0 && (
            <BookShelf
              title="Search Results"
              books={this.props.books}
              error={this.props.error}
            />
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

  books.forEach(book => {
    const matchedBook = booksInShelves.find(
      bookInShelves => bookInShelves.id === book.id
    );

    // Set `shelf` property in each book
    if (matchedBook) {
      console.log('MATCHEDBOOK');
      console.log(matchedBook);
    }
    book.shelf = matchedBook ? matchedBook.shelf : book.shelf || 'none';
  });

  return {
    books,
    error: state.search.error,
    loading: state.search.loading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(SearchActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
