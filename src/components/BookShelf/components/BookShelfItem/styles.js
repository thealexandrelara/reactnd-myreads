import styled from 'styled-components';

import BookShelfMenu from '../BookShelfMenu';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 270px;
  width: 250px;
  background: #fff;
  padding: 16px 24px;
  border-radius: 4px;
  margin: 60px 24px 0 24px;

  -webkit-box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1);

  a {
    align-self: center;
    text-decoration: none;
  }

  h1 {
    &.book-title {
      margin: 8px 0;
      font-size: 14px;
      text-align: center;
      color: #7a7a84;
    }
  }

  p {
    &.book-author {
      margin: 2px 0;
      font-size: 12px;
      text-align: center;
      color: #b9b9c0;
    }
  }
`;

export const BookThumbnail = styled.img`
  margin-top: -40px;
  height: 186px;
  width: 128px;
`;

export const Menu = styled(BookShelfMenu)`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;
