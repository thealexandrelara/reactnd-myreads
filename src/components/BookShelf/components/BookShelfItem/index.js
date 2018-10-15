import React from 'react';
import PropTypes from 'prop-types';

import { Container, BookThumbnail, Menu } from './styles';

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
      <h1 className="book-title">{title}</h1>
      {authors && authors.length && <p className="book-author">{authors[0]}</p>}
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
