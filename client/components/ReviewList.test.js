import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json';
import React from 'react';

import ReviewList from './ReviewList'


describe('ReviewList testing...', () => {

  test('Renders a div', () => {
    const actual = shallow(<ReviewList reviews={ [] } />);
    const child = <div className="reviewsList-container"/>

    expect(actual.contains(child));
  })
})