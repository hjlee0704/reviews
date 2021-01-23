import { shallow } from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';

import ReviewList from '../components/ReviewList';

const reviews = [
  {
    _id: 1,
    avatar: 'avatar url string',
    review: 'review name',
    date: 'date string',
    rating: 5,
    description: 'review description',
    imageUrl: 'image url',
    shopImage: 'shop image url',
  },
];

const wrapper = shallow(<ReviewList reviews={reviews}/>);
console.log(wrapper.debug())
describe('ReviewList testing...', () => {
  test('Renders a div', () => {
    const actual = shallow(<ReviewList reviews={[]} />);
    const child = <div className="reviewsList-container" />;
    expect(actual.contains(child));
  });

  test('Renders an avatar image', () => {
    // expect(wrapper.contains(<img src={reviews[0].avatar} alt="" className="rating-stars" />)).toBe(true);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
