import React from 'react';
import { render, mount } from 'enzyme';
import HomePage from './Home.page';
import initialValues from '../../../config/initialValues.config.json';

const { locations, ...initialValuesRest } = initialValues;

const initialProps = {
  store: { ...initialValuesRest },
  actions: { changeLocation: jest.fn(), getWeatherFor: jest.fn() }
};

describe('Home page', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = mount(<HomePage {...initialProps} />);
    instance = wrapper.instance();
  });

  it('should render without crashing', () => {
    expect(wrapper.find('div.Home-container').length).toBe(1);
    expect(wrapper).toBeDefined();
  });

  it('should change in the state the unit from c to f', () => {
    expect(wrapper.state().unit).toBe('c');
    jest.spyOn(instance, 'setState');
    instance.setState({ unit: 'f' });
    expect(instance.setState).toHaveBeenCalled();
    expect(wrapper.state().unit).toBe('f');
  });

  describe('change location function', () => {
    it('should call the actions functions if new location is not none', () => {
      const event = { target: { value: 'dummy-location' } };
      const expectedCall = { days: 7, location: 'dummy-location' };
      jest.spyOn(initialProps.actions, 'changeLocation');
      jest.spyOn(initialProps.actions, 'getWeatherFor');
      jest.spyOn(instance, 'changeLocation');
      instance.changeLocation(event);
      expect(instance.changeLocation).toHaveBeenCalledWith(event);
      expect(initialProps.actions.getWeatherFor).toHaveBeenCalledWith(
        expectedCall
      );
      expect(initialProps.actions.changeLocation).toHaveBeenCalledWith(
        expectedCall.location
      );
    });

    it('should not call the actions functions if new locations is none', () => {
      const event = { target: { value: 'none' } };
      jest.spyOn(initialProps.actions, 'changeLocation');
      jest.spyOn(initialProps.actions, 'getWeatherFor');
      jest.spyOn(instance, 'changeLocation');
      instance.changeLocation(event);
      expect(instance.changeLocation).toHaveBeenCalledWith(event);
      expect(initialProps.actions.getWeatherFor).toHaveBeenCalledTimes(1);
      expect(initialProps.actions.changeLocation).toHaveBeenCalledTimes(1);
    });
  });

  it('should render the location name', () => {
    const renderWrapper = render(<HomePage {...initialProps} />);
    expect(renderWrapper.find('h1.WeatherByCity-location-name')).toHaveLength(
      1
    );
  });
});
