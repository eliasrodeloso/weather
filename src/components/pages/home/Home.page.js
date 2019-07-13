import React from 'react';
import Slider from '../../weather-slider/Slider';
import WeatherByCity from '../../weather-city/WeatherByCity';
import initialValues from '../../../config/initialValues.config.json';
import './Home.styles.scss';

const HomePage = ({ store, actions }) => {
  console.log(store, actions);
  return (
    <div className="Home-container">
      <div className="Home-searchbar">
        <div>Search bar</div>
      </div>
      <div className="Home-content">
        <WeatherByCity
          current={initialValues.current}
          location={initialValues.location}
        />
        <Slider data={initialValues.forecast.forecastday} unit="c" />
      </div>
    </div>
  );
};

export default HomePage;
