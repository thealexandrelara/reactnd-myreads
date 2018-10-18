import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ghostIcon from '../../assets/images/ghost.svg';

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
            {books.length ? (
              books.map(book => (
                <BookShelfItem
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  authors={book.authors}
                  imageLinks={book.imageLinks}
                  shelf={book.shelf}
                />
              ))
            ) : (
              <div className="empty-book-shelf">
                <img
                  className="empty-book-shelf-icon"
                  src={ghostIcon}
                  alt="No books"
                  width={100}
                  height={100}
                />
                <p className="empty-book-shelf-text">Buh! No books here.</p>
              </div>
            )}
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
      shelf: PropTypes.string,
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
        thumbnail: PropTypes.string
      })
    })
  ),
  error: PropTypes.string
};

export default BookShelf;
