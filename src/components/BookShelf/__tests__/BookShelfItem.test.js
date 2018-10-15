import React from 'react';
import { shallow } from 'enzyme';
import BookShelfItem from '../components/BookShelfItem';

const props = {
  id: '1',
  title: 'React',
  shelf: 'none',
  authors: ['Alexandre Lara']
};

describe('BookShelfItem Component', () => {
  it('should title be rendered as expected', () => {
    const wrapper = shallow(<BookShelfItem {...props} />);

    console.log(wrapper.text());

    expect(wrapper.find('h1.book-title')).toHaveLength(1);
  });

  it('should author be rendered as expected', () => {
    const wrapper = shallow(<BookShelfItem {...props} />);

    console.log(wrapper.text());

    expect(wrapper.find('p.book-author')).toHaveLength(1);
  });
});
