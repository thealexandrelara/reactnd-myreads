import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.books-error-container {
    display: flex;
    flex-direction: column;
    min-height: 220px;
    justify-content: center;
    align-items: center;

    p.books-error-text {
      margin-top: 16px;
      color: #535254;
    }
  }
`;
