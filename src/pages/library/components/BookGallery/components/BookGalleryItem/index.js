import React from 'react';
// import PropTypes from 'prop-types';

import { Container, Title, AuthorName, BookThumbnail, Menu } from './styles';

const BookGalleryItem = ({
  id,
  title,
  authors,
  imageLinks: { smallThumbnail }
}) => {
  return (
    <Container>
      <BookThumbnail src={smallThumbnail} />
      <Title>{title}</Title>
      {authors.length && <AuthorName>{authors[0]}</AuthorName>}
      <Menu bookId={id} />
    </Container>
  );
};

// BookGalleryItem.propTypes = {};

export default BookGalleryItem;
