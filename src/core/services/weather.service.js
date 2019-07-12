import axios from '../../config/axios.config';
import environment from '../../config/constants/environment.constants';

export default class WeatherService {
  static getWeatherFor(location) {
    return axios.get(environment.FORECAST_URI, {
      params: {
        q: location
      }
    });
  }
}
