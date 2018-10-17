import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  faBook,
  faBookReader,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from '../../store/ducks/books';

import BookShelf from '../../components/BookShelf';
import { Container } from './styles';
import Loading from '../../components/Loading';
import ErrorBox from '../../components/ErrorBox';

const defaultBooksPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    shelf: PropTypes.string,
    maturityRating: PropTypes.string,
    infoLink: PropTypes.string,
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string,
      thumbnail: PropTypes.string
    })
  })
).isRequired;

class Library extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    getBooksRequest: PropTypes.func.isRequired,
    currentlyReadingBooks: defaultBooksPropTypes,
    wantToReadBooks: defaultBooksPropTypes,
    readBooks: defaultBooksPropTypes
  };

  componentDidMount() {
    this.props.getBooksRequest();
  }

  renderLibrary() {
    return (
      <Container>
        {this.props.error ? (
          <ErrorBox errorMessage="Whoops! Something went wrong" />
        ) : (
          <Fragment>
            <BookShelf
              faIcon={faBookReader}
              title="Currently Reading"
              books={this.props.currentlyReadingBooks}
            />
            <BookShelf
              faIcon={faBookOpen}
              title="Want to Read"
              books={this.props.wantToReadBooks}
            />
            <BookShelf
              faIcon={faBook}
              title="Read"
              books={this.props.readBooks}
            />
          </Fragment>
        )}
      </Container>
    );
  }

  render() {
    return this.props.loading ? <Loading /> : this.renderLibrary();
  }
}

const mapStateToProps = state => ({
  error: state.books.error,
  readBooks: state.books.data.filter(book => book.shelf === 'read'),
  currentlyReadingBooks: state.books.data.filter(
    book => book.shelf === 'currentlyReading'
  ),
  wantToReadBooks: state.books.data.filter(book => book.shelf === 'wantToRead'),
  loading: state.books.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
