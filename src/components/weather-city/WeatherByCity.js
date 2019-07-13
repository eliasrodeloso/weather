import React, { useState } from 'react';
import classNames from 'classnames';
import moment from 'moment';

const WeatherByCity = ({ location, current }) => {
  const [unit, setUnit] = useState('c');
  const celciusClassName = classNames('WeatherByCity-unit-selector', {
    'WeatherByCity-unit-selector--enabled': unit === 'c',
    'WeatherByCity-unit-selector--disabled': unit === 'f'
  });
  const farenheitClassName = classNames('WeatherByCity-unit-selector', {
    'WeatherByCity-unit-selector--enabled': unit === 'f',
    'WeatherByCity-unit-selector--disabled': unit === 'c'
  });
  return (
    <div className="WeatherByCity-container">
      <div className="WeatherByCity-location">
        <h1>{location.name}</h1>
        <h3>{moment(location.localtime_epoch * 1000).format('dddd, HH:mm')}</h3>
        <h3>{current.condition.text}</h3>
      </div>
      <div className="WeatherByCity-weather">
        <div className="WeatherByCity-column">
          <figure>
            <img src={current.condition.icon} alt={current.condition.text} />
          </figure>
          <span>{unit === 'c' ? current.temp_c : current.temp_f}</span>
          <button
            type="button"
            onClick={() => setUnit('c')}
            className={celciusClassName}
          >
            °C
          </button>
          <button
            type="button"
            onClick={() => setUnit('f')}
            className={farenheitClassName}
          >
            °F
          </button>
        </div>
        <div className="WeatherByCity-column">
          <p>
            {`Prob. de precipitaciones: ${Number(
              current.precip_in * 100
            ).toPrecision(1)}%.`}
          </p>
          <p>{`Humedad: ${current.humidity}%.`}</p>
          <p>{`Viento: a ${current.wind_kph} km/h.`}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherByCity;
