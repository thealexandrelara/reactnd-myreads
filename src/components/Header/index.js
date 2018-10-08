import React from 'react';

import { Container, SiteTitle, SearchItem } from './styles';

const Header = () => {
  return (
    <Container>
      <SiteTitle>MyReads</SiteTitle>
      <SearchItem>Login</SearchItem>
    </Container>
  );
};

export default Header;
