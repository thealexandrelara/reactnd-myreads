import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, AuthorName, BookThumbnail, Menu } from './styles';

import pictureIcon from '../../../../assets/images/picture.svg';

const BookShelfItem = ({
  id,
  title,
  authors,
  imageLinks: { smallThumbnail } = {},
  shelf
}) => {
  return (
    <Container>
      <BookThumbnail src={smallThumbnail ? smallThumbnail : pictureIcon} />
      <Title>{title}</Title>
      {authors && authors.length && <AuthorName>{authors[0]}</AuthorName>}
      <Menu bookId={id} currentShelf={shelf || ''} />
    </Container>
  );
};

BookShelfItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  imageLinks: PropTypes.shape({
    smallThumbnail: PropTypes.string,
    thumbnail: PropTypes.string
  }),
  shelf: PropTypes.string
};

export default BookShelfItem;
