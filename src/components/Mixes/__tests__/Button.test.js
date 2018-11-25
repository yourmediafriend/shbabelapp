import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

// Component to be tested
import Button from '../Button';

describe('<Button />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Button />);
      const component = wrapper.dive();
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});