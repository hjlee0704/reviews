import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import axios from 'axios';
import React from 'react';

import Reviews from '../components/Reviews';

const wrapper = shallow(<Reviews />);
const wrapperInstance = wrapper.instance();
const e = { preventDefault: jest.fn() };

describe('Reviews testing...', () => {
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

  test('Should send get request', async () => {
    const resp = {
      data: {
        _id: 1,
        shopReviews: [
          {
            _id: 1,
            avatar: 'string',
            name: 'string',
            date: 'string',
            rating: 5,
            description: 'string',
            imageUrl: 'string',
            recommended: 332,
            purchasedItem: 'string',
            shopImage: 'string',
          },
        ],
        total: 100,
      },
    };

    const getSpySuccess = jest.spyOn(axios, 'get')
      .mockResolvedValueOnce(resp);
    await wrapper.instance().componentDidMount();
    expect(getSpySuccess).toHaveBeenCalledTimes(1);
  });

  test('Should invoke componentDidMount()', () => {
    jest.spyOn(wrapperInstance, 'getReviews');
    wrapperInstance.componentDidMount();
    expect(wrapperInstance.getReviews).toHaveBeenCalledTimes(1);
  });

  test('Should call onSortReviews function', async () => {
    jest.spyOn(wrapperInstance, 'onSortReviews');
    wrapperInstance.onSortReviews();
    expect(wrapperInstance.onSortReviews).toHaveBeenCalledTimes(1);
  });
});
