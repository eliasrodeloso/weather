import React from 'react';
import Slider from '../../weather-slider/Slider';
import WeatherByCity from '../../weather-city/WeatherByCity';
import initialValues from '../../../config/initialValues.config.json';
import './Home.styles.scss';

class HomePage extends React.PureComponent {
  state = {
    unit: 'c'
  };

  changeLocation = (event) => {
    const { actions } = this.props;
    const { target } = event;
    if (target.value !== 'none') {
      actions.changeLocation(target.value);
      actions.getWeatherFor({ location: target.value, days: 7 });
    }
  };

  render() {
    const { store } = this.props;
    const { unit } = this.state;
    return (
      <div className="Home-container">
        <div className="Home-location-selector">
          Select your preferred location
          <select
            name="citySelector"
            id="citySelector"
            value={store.selectedLocation}
            onChange={this.changeLocation}
          >
            <option value="none">-- Select one --</option>
            {initialValues.locations.map(location => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="Home-content">
          {store.selectedLocation === 'none' ? (
            <div className="Home-content-empty">
              <div className="cloudy" />
              <h1>Select your location above! ;)</h1>
            </div>
          ) : (
            <React.Fragment>
              {store.isLoading ? (
                <div>Loading...</div>
              ) : (
                <React.Fragment>
                  <WeatherByCity
                    current={store.current}
                    location={store.location}
                    unit={unit}
                    onUnitChange={newUnit => this.setState({ unit: newUnit })}
                  />
                  <Slider data={store.forecast.forecastday} unit={unit} />
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
