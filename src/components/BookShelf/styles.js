import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  margin-top: 32px;
`;

export const BookShelfContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;

  div.empty-book-shelf {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;

    img.empty-book-shelf-icon {
      margin-top: 16px;
    }

    p.empty-book-shelf-text {
      margin-top: 16px;
      color: #bdbdbd;
    }
  }
`;

export const BookShelfTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #535254;
`;

export const ShelfTitle = styled.h1`
  padding: 8px 16px;
  font-weight: 300;
  color: #535254;
`;

export const ErrorMessage = styled.p`
  color: #ef5350;
`;
