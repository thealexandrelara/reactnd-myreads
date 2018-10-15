import React from 'react';
import { shallow, mount } from 'enzyme';
import Library from '../library';
import createMockStore from 'redux-mock-store';
import { Creators as BooksActions } from '../../store/ducks/books';

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
    const wrapper = mount(<Library />, {
      context: { store }
    });

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

    const wrapper = mount(<Library />, {
      context: { store: loadingStore }
    });

    console.log(wrapper.html());

    expect(wrapper.find('Loading')).toHaveLength(1);
  });
});
