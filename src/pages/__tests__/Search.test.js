import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../search';
import createMockStore from 'redux-mock-store';
import { Creators as SearchActions } from '../../store/ducks/search';

const mockStore = createMockStore();
const store = mockStore({
  books: {
    data: []
  },
  loading: false,
  error: undefined,
  search: {
    books: [
      {
        id: '1',
        title: 'React',
        shelf: 'none',
        authors: ['Alexandre Lara']
      }
    ]
  }
});

describe('Search Component', () => {
  it('should render input as expected', () => {
    const wrapper = mount(<Search />, {
      context: { store }
    });

    console.log(wrapper.html());

    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should input change its value', () => {
    const wrapper = mount(<Search />, {
      context: { store }
    });
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'foo' } });

    expect(store.getActions()).toContainEqual(
      SearchActions.searchBooksRequest('foo')
    );
  });

  it('should reset store when input is empty', () => {
    const wrapper = mount(<Search />, {
      context: { store }
    });
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '' } });

    expect(store.getActions()).toContainEqual(
      SearchActions.searchBooksResetRequest()
    );
  });
});
