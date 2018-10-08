import React from 'react';
// import PropTypes from 'prop-types';

import { Container, Title, AuthorName, BookThumbnail } from './styles';

const BookGalleryItem = () => {
  return (
    <Container>
      <BookThumbnail src="http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />
      <Title>Harry Potter: Phylosopher's Stone</Title>
      <AuthorName>J.K. Rowling</AuthorName>
    </Container>
  );
};

// BookGalleryItem.propTypes = {};

export default BookGalleryItem;
