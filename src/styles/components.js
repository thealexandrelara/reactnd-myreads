import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const HeaderBackground = styled.section`
  content: '';
  width: 100%;
  height: 200px;
  z-index: -1000;
  background: linear-gradient(160deg, #5b4ab3, #322684);
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: skew(0deg, -5deg);
  transform: skew(0deg, -5deg);
  border-bottom-left-radius: 120px;
`;
