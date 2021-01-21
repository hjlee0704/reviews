import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import App from '../components/App';

const wrapper = shallow(<App />);
const wrapperInstance = wrapper.instance();
const e = { preventDefault: jest.fn() };

describe('App testing...', () => {
  test('matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('Current page starts at 1', async () => {
    expect(wrapper.state('currentPage')).toEqual(1);
  });

  test('Increases currentPage from 1 to 2, when button is clicked', () => {
    wrapperInstance.incrementPage(e);
    expect(wrapper.state('currentPage')).toBe(2);
  });

  test('Descreases currentPage from 2 to 1, when button is clicked', () => {
    wrapperInstance.decrementPage(e);
    expect(wrapper.state('currentPage')).toBe(1);
  });
});
