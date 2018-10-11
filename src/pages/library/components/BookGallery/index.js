import React from 'react';
// import PropTypes from 'prop-types';

import { Container, BookGalleryContainer, GalleryTitle } from './styles';
import BookGalleryItem from './components/BookGalleryItem';

const BookGallery = ({ title, books }) => {
  return (
    <Container>
      <GalleryTitle>{title}</GalleryTitle>
      <BookGalleryContainer>
        {books.map(book => (
          <BookGalleryItem
            key={book.id}
            id={book.id}
            title={book.title}
            authors={book.authors}
            imageLinks={book.imageLinks}
          />
        ))}
      </BookGalleryContainer>
    </Container>
  );
};

// BookGalleryItem.propTypes = {};

export default BookGallery;
