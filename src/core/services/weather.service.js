import axios from '../../config/axios.config';
import environment from '../../config/constants/environment.constants';

export default class WeatherService {
  static getCurrentWeatherFor(location) {
    return axios.get(environment.CURRENT_URI, {
      params: {
        q: location
      }
    });
  }

  static getWeatherFor(location, days) {
    return axios.get(environment.FORECAST_URI, {
      params: {
        q: location,
        days
      }
    });
  }
}
