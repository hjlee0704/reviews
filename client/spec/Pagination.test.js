/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import { shallow, mount } from 'enzyme';
import React from 'react';
import Pagination from '../components/Pagination';
import App from '../components/App';

const props = {
  decrementPage: jest.fn(),
  incrementPage: jest.fn(),
  paginate: jest.fn(),
  totalReviews: 33,
  average: 3,
  reviewsPerPage: 1,
};

const e = { preventDefault: jest.fn() };

const wrapper = shallow(<Pagination {...props} />);
const incrementBtn = wrapper.find('#increment');
const decrementBtn = wrapper.find('#decrement');
const paginateBtn = wrapper.find('#paginate');
console.log(wrapper.debug());
// const wrapperApp = shallow(<App />);
// const paginateBtn = wrapperApp.find('#paginate');
// console.log(wrapperApp.debug());
describe('Behavior of buttons on Pagination component...', () => {
  test('Should call all onClicks', () => {
    expect(props.incrementPage).not.toHaveBeenCalled();
    incrementBtn.simulate('click');
    expect(props.incrementPage).toHaveBeenCalled();
    decrementBtn.simulate('click');
    expect(props.decrementPage).toHaveBeenCalled();
    paginateBtn.at(0).simulate('click');
    expect(props.paginate).toHaveBeenCalled();
  });
});
