import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Footer component', () => {
  it('should renders as expected', () => {
    const wrapper = shallow(<Footer />);

    console.log(wrapper.html());

    expect(wrapper.contains('© 2018. Alexandre Lara')).toBe(true);
  });
});
