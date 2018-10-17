import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Search from '../search';
import createMockStore from 'redux-mock-store';
import { Creators as SearchActions } from '../../store/ducks/search';

import Loading from '../../components/Loading';

const mockStore = createMockStore();
const store = mockStore({
  books: {
    data: [
      {
        id: '1',
        title: 'React',
        authors: ['Alexandre Lara']
      }
    ]
  },
  loading: false,
  error: undefined,
  search: {
    books: [
      {
        id: '1',
        title: 'React',
        authors: ['Alexandre Lara']
      }
    ]
  }
});

describe('Search Component', () => {
  it('should render input as expected', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Provider store={store}>
          <Search />
        </Provider>
      </MemoryRouter>
    );

    console.log(wrapper.html());

    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should render loading', () => {
    const loadingStore = mockStore({
      books: {
        data: []
      },
      search: {
        loading: true,
        books: []
      }
    });

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Provider store={loadingStore}>
          <Search />
        </Provider>
      </MemoryRouter>
    );

    console.log(wrapper.text());

    expect(wrapper.find('Loading')).toHaveLength(1);
  });

  it('should render error', () => {
    const errorStore = mockStore({
      books: {
        data: []
      },
      search: {
        loading: false,
        books: [],
        error: 'Error'
      }
    });

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Provider store={errorStore}>
          <Search />
        </Provider>
      </MemoryRouter>
    );

    console.log(wrapper.text());

    expect(wrapper.find('Loading')).toHaveLength(0);
  });

  it('should input change its value', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Provider store={store}>
          <Search />
        </Provider>
      </MemoryRouter>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'foo' } });

    expect(store.getActions()).toContainEqual(
      SearchActions.searchBooksRequest('foo')
    );
  });

  it('should reset store when input is empty', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Provider store={store}>
          <Search />
        </Provider>
      </MemoryRouter>,
      {
        context: { store }
      }
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '' } });

    expect(store.getActions()).toContainEqual(
      SearchActions.searchBooksResetRequest()
    );
  });
});
