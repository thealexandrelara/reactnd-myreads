import styled from 'styled-components';

import BookGalleryMenu from '../BookGalleryMenu';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 270px;
  width: 200px;
  background: #fff;
  padding: 16px 24px;
  border-radius: 4px;
  margin-left: 24px;
  margin-top: 40px;

  -webkit-box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1);
`;

export const BookThumbnail = styled.img`
  margin-top: -40px;
  height: 186px;
  width: 128px;
`;

export const Title = styled.h1`
  margin: 8px 0;
  font-size: 14px;
  text-align: center;
  color: #7a7a84;
`;

export const AuthorName = styled.p`
  margin: 2px 0;
  font-size: 12px;
  text-align: center;
  color: #b9b9c0;
`;

export const Menu = styled(BookGalleryMenu)`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;
