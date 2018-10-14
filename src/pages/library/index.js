import React, { Component } from 'react';
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

class Library extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    getBooksRequest: PropTypes.func.isRequired,
    currentlyReadingBooks: PropTypes.arrayOf(
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
    wantToReadBooks: PropTypes.arrayOf(
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
    readBooks: PropTypes.arrayOf(
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
    ).isRequired
  };

  componentDidMount() {
    this.props.getBooksRequest();
  }

  renderLibrary() {
    return (
      <Container>
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
        <BookShelf faIcon={faBook} title="Read" books={this.props.readBooks} />
      </Container>
    );
  }

  render() {
    return this.props.loading ? <Loading /> : this.renderLibrary();
  }
}

const mapStateToProps = state => ({
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
