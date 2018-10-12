import React from 'react';
// import PropTypes from 'prop-types';

import { Container, BookShelfContainer, ShelfTitle } from './styles';
import BookShelfItem from './components/BookShelfItem';

const BookShelf = ({ title, books }) => {
  return (
    <Container>
      <ShelfTitle>{title}</ShelfTitle>
      <BookShelfContainer>
        {books.map(book => (
          <BookShelfItem
            key={book.id}
            id={book.id}
            title={book.title}
            authors={book.authors}
            imageLinks={book.imageLinks}
          />
        ))}
      </BookShelfContainer>
    </Container>
  );
};

// BookShelfItem.propTypes = {};

export default BookShelf;
