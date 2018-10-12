import React, { Component } from 'react';

import { Container } from './styles';

class SearchInput extends Component {
  state = {
    query: ''
  };

  handleInputChange = query => {
    this.props.onChange(query);

    this.setState(prevState => ({
      query: query.trim()
    }));
  };

  render() {
    return (
      <Container className={this.props.className}>
        <input
          placeholder="Search books here..."
          value={this.state.query}
          onChange={e => this.handleInputChange(e.target.value)}
        />
      </Container>
    );
  }
}

export default SearchInput;
