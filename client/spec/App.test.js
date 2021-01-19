import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import "@babel/polyfill";

import App from '../components/App';

const wrapper = shallow(<App />);

describe('App testing...', () => {
  test('matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('Current page starts at 1', async () => {
    expect(wrapper.state('currentPage')).toEqual(1);
  });
});
