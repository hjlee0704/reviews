/* eslint-disable no-console */
import { shallow, mount } from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';
import Rating from '../components/Rating';

const src = {
  rating: '1',
};

const sources = {
  1: 'imgs/oneStar.png',
};

const wrapper = shallow(<Rating rating={src.rating} />);
console.log(wrapper.debug());

describe('Dropdown testing component', () => {
  test('renders an image tag', () => {
    expect(wrapper.contains(<img src={sources['1']} alt="" className="rating-stars" />)).toBe(true);
  });
});
