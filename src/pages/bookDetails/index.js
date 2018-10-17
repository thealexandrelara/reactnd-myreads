import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as BookDetailsActions } from '../../store/ducks/bookDetails';

import {
  Container,
  BookInfoContainer,
  CategoriesContainer,
  Category,
  BookHeaderContainer,
  Menu
} from './styles';
import Loading from '../../components/Loading';
import ErrorBox from '../../components/ErrorBox';

import pictureIcon from '../../assets/images/picture.svg';

const defaultBooksPropTypes = PropTypes.shape({
  id: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  subtitle: PropTypes.subtitle,
  shelf: PropTypes.string,
  publisher: PropTypes.string,
  publishedDate: PropTypes.string,
  pageCount: PropTypes.number,
  language: PropTypes.string,
  maturityRating: PropTypes.string,
  imageLinks: PropTypes.shape({
    smallThumbnail: PropTypes.string,
    thumbnail: PropTypes.string
  }),
  description: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  averageRating: PropTypes.number
}).isRequired;

class BookDetails extends Component {
  static propTypes = {
    book: defaultBooksPropTypes
  };

  componentDidMount() {
    this.loadBookDetails();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loadBookDetails();
    }
  }

  loadBookDetails() {
    const { id } = this.props.match.params;
    this.props.getBookDetailsRequest(id);
  }

  renderBook() {
    const {
      id,
      shelf,
      imageLinks,
      title,
      subtitle,
      description,
      authors,
      pageCount,
      publisher,
      categories
    } = this.props.book;

    return (
      <Container>
        <BookHeaderContainer>
          <div>
            <img
              className="book-thumbnail"
              src={
                imageLinks && imageLinks.smallThumbnail
                  ? imageLinks.smallThumbnail
                  : pictureIcon
              }
              alt={title}
            />
          </div>
          <BookInfoContainer>
            <h1 className="book-title">{title}</h1>
            {subtitle && <h3 className="book-subtitle">{subtitle}</h3>}
            {categories && (
              <CategoriesContainer>
                {categories.map(category => (
                  <Category key={category}>{category}</Category>
                ))}
              </CategoriesContainer>
            )}
            {authors && (
              <p>
                <strong>Authors:</strong> {authors.join(', ')}
              </p>
            )}
            {pageCount && (
              <p>
                <strong>Pages:</strong> {pageCount}
              </p>
            )}
            {publisher && (
              <p>
                <strong>Publisher:</strong> {publisher}
              </p>
            )}
          </BookInfoContainer>
          <Menu currentShelf={shelf} bookId={id} />
        </BookHeaderContainer>
        {description && <p className="book-description">{description}</p>}
      </Container>
    );
  }

  render() {
    const { error } = this.props;

    if (error) {
      return <ErrorBox errorMessage={error} />;
    }

    return this.props.loading || !this.props.book ? (
      <Loading />
    ) : (
      this.renderBook()
    );
  }
}

const mapStateToProps = state => ({
  book: state.bookDetails.data,
  loading: state.bookDetails.loading,
  error: state.bookDetails.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BookDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetails);
