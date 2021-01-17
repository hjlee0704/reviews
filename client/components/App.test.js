import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json';
import React from 'react';

import App from './App';

describe('App testing...', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<App />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  })
})

