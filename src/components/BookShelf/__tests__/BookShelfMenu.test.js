import React from 'react';
import { mount } from 'enzyme';
import createMockStore from 'redux-mock-store';
import BookShelfMenu from '../components/BookShelfMenu';

const mockStore = createMockStore();
const store = mockStore({
  books: []
});

describe('BookShelfMenu Component', () => {
  it('should title be rendered as expected', () => {
    const props = { bookId: '1' };

    const wrapper = mount(<BookShelfMenu {...props} />, {
      context: { store }
    });

    console.log(wrapper.html());

    expect(wrapper.find('div').length).toBeGreaterThanOrEqual(1);
  });
});
