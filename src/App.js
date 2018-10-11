import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Library from './pages/library';
import Header from './components/Header';
import Footer from './components/Footer';
import store from './store';
import Routes from './routes';

import './styles/global';

import {
  Wrapper,
  Container,
  Content,
  HeaderBackground
} from './styles/components';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <Wrapper> */}
          <Container>
            <Content>
              <HeaderBackground />
              <Header />
              <Routes />
              <Footer />
            </Content>
          </Container>
          {/* </Wrapper> */}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
