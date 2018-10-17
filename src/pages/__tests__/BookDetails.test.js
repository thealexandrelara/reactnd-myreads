import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookDetails from '../bookDetails';
import createMockStore from 'redux-mock-store';

const mockStore = createMockStore();
const store = mockStore({
  bookDetails: {
    loading: false,
    data: {
      id: '1',
      title: 'React',
      shelf: 'read',
      authors: ['Alexandre Lara'],
      categories: ['Fiction']
    },
    book: {
      id: '1',
      title: 'React',
      shelf: 'read',
      authors: ['Alexandre Lara'],
      categories: ['Fiction']
    }
  }
});

describe('Book Details Component', () => {
  it('should render component as expected', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/book/PKpPCwAAQBAJ']}>
        <Provider store={store}>
          <Route path="/book/:id" component={BookDetails} />
        </Provider>
      </MemoryRouter>
    );

    console.log(wrapper);

    expect(wrapper.find('ErrorBox')).toHaveLength(0);
  });

  it('should render loading as expected', () => {
    const loadingStore = mockStore({
      bookDetails: {
        loading: true,
        data: {}
      }
    });

    const wrapper = mount(
      <MemoryRouter initialEntries={['/book/abc']}>
        <Provider store={loadingStore}>
          <Route path="/book/:id" component={BookDetails} />
        </Provider>
      </MemoryRouter>
    );

    console.log(wrapper.text());

    expect(wrapper.find('Container')).toHaveLength(0);
  });

  it('should render error as expected', () => {
    const errorStore = mockStore({
      bookDetails: {
        error: 'error',
        data: {}
      }
    });

    const wrapper = mount(
      <MemoryRouter initialEntries={['/book/abc']}>
        <Provider store={errorStore}>
          <Route path="/book/:id" component={BookDetails} />
        </Provider>
      </MemoryRouter>
    );

    console.log(wrapper.text());

    expect(wrapper.find('ErrorBox')).toHaveLength(1);
  });
});
