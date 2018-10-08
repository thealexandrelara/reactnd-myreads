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
        <BookGallery />
      </Container>
    );
  }

  render() {
    console.log(this.props);
    return this.props.loading ? <div>Loading...</div> : this.renderLibrary();
  }
}

const mapStateToProps = state => ({
  books: state.books.data,
  loading: state.books.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
