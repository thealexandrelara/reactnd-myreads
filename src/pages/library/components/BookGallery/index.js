import React from 'react';
// import PropTypes from 'prop-types';

import { Container, BookGalleryContainer, GalleryTitle } from './styles';
import BookGalleryItem from './components/BookGalleryItem';

const BookGallery = () => {
  return (
    <Container>
      <GalleryTitle>Currently Reading</GalleryTitle>
      <BookGalleryContainer>
        <BookGalleryItem />
        <BookGalleryItem />
        <BookGalleryItem />
        <BookGalleryItem />
      </BookGalleryContainer>
    </Container>
  );
};

// BookGalleryItem.propTypes = {};

export default BookGallery;
