import { shallow } from 'enzyme';
import React from 'react';

import ReviewList from '../components/ReviewList';

describe('ReviewList testing...', () => {
  test('Renders a div', () => {
    const actual = shallow(<ReviewList reviews={[]} />);
    const child = <div className="reviewsList-container" />;
    expect(actual.contains(child));
  });
});
