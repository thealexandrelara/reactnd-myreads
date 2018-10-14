import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

class SearchInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  state = {
    query: ''
  };

  handleInputChange = query => {
    this.props.onChange(query);

    this.setState(prevState => ({
      query
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
