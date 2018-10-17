import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Library from '../library';
import createMockStore from 'redux-mock-store';

const mockStore = createMockStore();
const store = mockStore({
  books: {
    loading: false,
    data: [
      {
        id: '1',
        title: 'React',
        shelf: 'read',
        authors: ['Alexandre Lara']
      },

      {
        id: '2',
        title: 'React',
        shelf: 'currentlyReading',
        authors: ['Alexandre Lara']
      },

      {
        id: '3',
        title: 'React',
        shelf: 'wantToRead',
        authors: ['Alexandre Lara']
      }
    ]
  }
});

describe('Search Component', () => {
  it('should render as expected', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <Library />
        </Provider>
      </MemoryRouter>,
      {
        context: { store }
      }
    );

    console.log(wrapper.html());

    expect(wrapper.find('BookShelf')).toHaveLength(3);
  });

  it('should render loading as expected', () => {
    const loadingStore = mockStore({
      books: {
        loading: true,
        data: []
      }
    });

    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={loadingStore}>
          <Library />
        </Provider>
      </MemoryRouter>
    );

    console.log(wrapper.html());

    expect(wrapper.find('Loading')).toHaveLength(1);
  });
});
