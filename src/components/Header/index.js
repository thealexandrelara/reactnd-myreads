import React from 'react';

import { Container, SiteTitle, SearchItem } from './styles';

const Header = () => {
  return (
    <Container>
      <div className="header-background" />
      <SiteTitle to="/">MyReads</SiteTitle>
      <SearchItem to="/search">Search</SearchItem>
    </Container>
  );
};

export default Header;
