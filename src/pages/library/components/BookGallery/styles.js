import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-top: 32px;
`;

export const BookGalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
`;

export const GalleryTitle = styled.h1`
  padding: 8px 16px;
  font-weight: 300;
  color: #535254;
`;
