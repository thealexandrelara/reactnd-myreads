import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header component', () => {
  it('should renders menu title and search links', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    console.log(wrapper.html());

    expect(wrapper.find('Link')).toHaveLength(2);
  });
});
