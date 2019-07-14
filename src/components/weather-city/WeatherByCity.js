import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import './WeatherByCity.scss';

const WeatherByCity = ({
  location, current, unit, onUnitChange
}) => {
  const celciusClassName = classNames('WeatherByCity-unit-selector', {
    'WeatherByCity-unit-selector--enabled': unit === 'f',
    'WeatherByCity-unit-selector--disabled': unit === 'c'
  });
  const farenheitClassName = classNames('WeatherByCity-unit-selector', {
    'WeatherByCity-unit-selector--enabled': unit === 'c',
    'WeatherByCity-unit-selector--disabled': unit === 'f'
  });
  return (
    <div className="WeatherByCity-container">
      <div className="WeatherByCity-location WeatherByCity-block">
        <h1>{location.name}</h1>
        <h3>{moment(location.localtime_epoch * 1000).format('dddd, HH:mm')}</h3>
        <h3>{current.condition.text}</h3>
      </div>
      <div className="WeatherByCity-weather WeatherByCity-block">
        <div className="WeatherByCity-column">
          <figure>
            <img src={current.condition.icon} alt={current.condition.text} />
          </figure>
          <div className="WeatherByCity-temp">
            <span>
              {unit === 'c'
                ? current.temp_c.toFixed(0)
                : current.temp_f.toFixed(0)}
            </span>
            <div>
              <button
                type="button"
                onClick={() => onUnitChange('c')}
                className={celciusClassName}
              >
                °C
              </button>
              <button
                type="button"
                onClick={() => onUnitChange('f')}
                className={farenheitClassName}
              >
                °F
              </button>
            </div>
          </div>
        </div>
        <div className="WeatherByCity-column">
          <p>
            {`Precipitation prob.: ${Number(
              current.precip_in * 100
            ).toPrecision(1)}%.`}
          </p>
          <p>{`Humidity: ${current.humidity}%.`}</p>
          <p>{`Wind: to ${current.wind_kph} km/h.`}</p>
        </div>
      </div>
    </div>
  );
};

WeatherByCity.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  unit: PropTypes.string.isRequired,
  onUnitChange: PropTypes.func.isRequired
};

export default WeatherByCity;
