import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from '../../store/ducks/books';

import { Container } from './styles';

import BookGallery from './components/BookGallery';

class Library extends Component {
  componentDidMount() {
    console.log('didMount');
    this.loadBooks();
  }

  loadBooks() {
    this.props.getBooksRequest();
  }

  renderLibrary() {
    return (
      <Container>
        <BookGallery
          title="Currently Reading"
          books={this.props.currentlyReadingBooks}
        />
        <BookGallery title="Want to Read" books={this.props.wantToReadBooks} />
        <BookGallery title="Read" books={this.props.readBooks} />
      </Container>
    );
  }

  render() {
    console.log(this.props);
    return this.props.loading ? <div>Loading...</div> : this.renderLibrary();
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
