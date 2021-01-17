import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import App from '../components/App';

describe('App testing...', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<App />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
