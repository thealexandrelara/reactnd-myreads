import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Library from './pages/library';
import Header from './components/Header';
import store from './store';

import './styles/global';

import {
  Wrapper,
  Container,
  Content,
  HeaderBackground,
  Footer,
  FooterCopyright
} from './styles/components';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <Container>
            <Content>
              <HeaderBackground />
              <Header />
              <Library />
              <Footer>
                <FooterCopyright>© 2018. Alexandre Lara</FooterCopyright>
              </Footer>
            </Content>
          </Container>
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
