import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  height: 160px;
  justify-content: center;
  align-items: baseline;
  margin: 24px 48px 0;

  .header-background {
    content: '';
    width: 100%;
    height: 200px;
    z-index: -10000;
    background: linear-gradient(160deg, #5b4ab3, #322684);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: skew(0deg, -5deg);
    transform: skew(0deg, -5deg);
    border-bottom-left-radius: 120px;
  }

  #menu {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
  }
`;

export const SiteTitle = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 1.5em;
  font-weight: bolder;
  text-decoration: none;
`;

export const SearchItem = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  text-decoration: none;
`;
