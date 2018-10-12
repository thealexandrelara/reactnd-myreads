import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 80%;
  border-radius: 50px;
  padding: 0 24px;

  -webkit-box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1);

  input {
    flex: 1;
    font-size: 12px;
    border: 0;
  }
`;
