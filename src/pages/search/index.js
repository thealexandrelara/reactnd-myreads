import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as SearchActions } from '../../store/ducks/search';

import BookShelf from '../../components/BookShelf';
import { Container, SearchBox } from './styles';

class Search extends Component {
  handleInputChange = query => {
    console.log('query: ', query);
    this.props.searchBooksRequest(query);
  };

  render() {
    return (
      <Container>
        <SearchBox onChange={this.handleInputChange} />
        <BookShelf title="Search Results" books={this.props.books} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  books: state.search.books
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SearchActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
