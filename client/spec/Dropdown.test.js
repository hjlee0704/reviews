/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { shallow } from 'enzyme';
import React from 'react';
import Dropdown from '../components/Dropdown';

const e = { preventDefault: jest.fn() };

const props = {
  onSortReviews: jest.fn(),
};

const wrapper = shallow((<Dropdown {...props} />));
const wrapperInstance = wrapper.instance();
console.log(wrapper.debug());

describe('Behavior of buttons on Dropdown component...', () => {
  test('Check to see if menu is open', () => {
    wrapperInstance.showMenu(e);
    expect(wrapper.state('displayMenu')).toBe(true);
  });

  test('Check to see if menu is closed', () => {
    wrapperInstance.hideMenu(e);
    expect(wrapper.state('displayMenu')).toBe(false);
  });
});
