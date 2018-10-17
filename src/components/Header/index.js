import React from 'react';

import { Container, SiteTitle, SearchItem } from './styles';

const Header = () => {
  return (
    <Container>
      <div className="header-background" />
      <div id="menu">
        <SiteTitle to="/">MyReads</SiteTitle>
        <SearchItem to="/search">Search</SearchItem>
      </div>
    </Container>
  );
};

export default Header;
