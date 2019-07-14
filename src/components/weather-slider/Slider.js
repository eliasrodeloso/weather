import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import moment from 'moment';
import './Slider.scss';

const Slider = ({ data, unit }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const round = number => number.toFixed(0);
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
  const isMobile = windowWidth <= 425;
  const isTablet = windowWidth < 768 && windowWidth > 425;
  let slidesPerRow = 8;
  if (isMobile) slidesPerRow = 3;
  if (isTablet) slidesPerRow = 4;
  return (
    <SlickSlider autoplay={false} slidesPerRow={slidesPerRow} infinite={false}>
      {data.map((forecast, index) => (
        <div
          key={forecast.date_epoch}
          className="Slider-container"
          role="button"
          tabIndex={index}
          onClick={() => {
            console.log('click');
          }}
        >
          {moment(forecast.date).format('ddd.')}
          <figure>
            <img
              src={forecast.day.condition.icon}
              alt={forecast.day.condition.text}
            />
          </figure>
          <div className="Slider-temp">
            <span className="Slider-temp-max">
              {`${
                unit === 'c'
                  ? round(forecast.day.maxtemp_c)
                  : round(forecast.day.maxtemp_f)
              } °`}
            </span>
            <span className="Slider-temp-min">
              {`${
                unit === 'c'
                  ? round(forecast.day.mintemp_c)
                  : round(forecast.day.mintemp_f)
              } °`}
            </span>
          </div>
        </div>
      ))}
    </SlickSlider>
  );
};

Slider.propTypes = {
  ...SlickSlider.propTypes,
  data: PropTypes.array.isRequired,
  unit: PropTypes.string.isRequired
};

Slider.defaultProps = {
  ...SlickSlider.defaultProps
};

export default Slider;
