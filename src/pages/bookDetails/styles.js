import styled from 'styled-components';

import BookShelfMenu from '../../components/BookShelf/components/BookShelfMenu';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 960px;
  background: #fff;
  padding: 16px 16px;
  border-radius: 4px;
  margin: 60px 24px 0 24px;
  color: #535254;

  -webkit-box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1);

  img {
    .book-thumbnail {
      height: 186px;
      width: 128px;
      max-height: 186px;
    }
  }

  .book-description {
    margin: 12px 0;
  }
`;

export const BookHeaderContainer = styled.div`
  display: flex;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 16px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
`;

export const Category = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  margin: 4px;
  border-radius: 25px;
  border: 1px solid #e0e0e0;
  color: #9e9e9e;

  &:first-child {
    margin-left: 0;
  }
`;

export const Menu = styled(BookShelfMenu)`
  justify-self: flex-end;
`;
