import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Container,
  BookShelfContainer,
  BookShelfTitleContainer,
  ShelfTitle,
  ErrorMessage
} from './styles';
import BookShelfItem from './components/BookShelfItem';

const BookShelf = ({ faIcon, title, books, error }) => {
  return (
    <Container>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <Fragment>
          <BookShelfTitleContainer>
            {faIcon ? <FontAwesomeIcon icon={faIcon} /> : ''}
            <ShelfTitle>{title}</ShelfTitle>
          </BookShelfTitleContainer>
          <BookShelfContainer>
            {books.map(book => (
              <BookShelfItem
                key={book.id}
                id={book.id}
                title={book.title}
                authors={book.authors}
                imageLinks={book.imageLinks}
                shelf={book.shelf}
              />
            ))}
          </BookShelfContainer>
        </Fragment>
      )}
    </Container>
  );
};

BookShelfItem.propTypes = {
  faIcon: PropTypes.object,
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      subtitle: PropTypes.subtitle,
      shelf: PropTypes.string,
      readingModes: PropTypes.shape({
        text: PropTypes.bool,
        image: PropTypes.bool
      }),
      ratingsCount: PropTypes.number,
      publisher: PropTypes.string,
      publishedDate: PropTypes.string,
      printType: PropTypes.string,
      previewLink: PropTypes.string,
      pageCount: PropTypes.number,
      language: PropTypes.string,
      maturityRating: PropTypes.string,
      infoLink: PropTypes.string,
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
        thumbnail: PropTypes.string
      }),
      description: PropTypes.string,
      contentVersion: PropTypes.string,
      categories: PropTypes.arrayOf(PropTypes.string),
      canonicalVolumeLink: PropTypes.string,
      averageRating: PropTypes.number,
      allowAnonLogging: PropTypes.bool
    })
  ),
  error: PropTypes.string
};

export default BookShelf;
