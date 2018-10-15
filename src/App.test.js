import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('should render as expected', () => {
    const wrapper = mount(<App />);

    console.log(wrapper.html());

    expect(wrapper.find('Loading')).toHaveLength(1);
  });
});
