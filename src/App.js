import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import store from './store';
import Routes from './routes';

import './styles/global';

import { Container, Content } from './styles/components';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <Header />
            <Content>
              <Routes />
            </Content>
            <Footer />
          </Container>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
