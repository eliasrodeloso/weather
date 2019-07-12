import WeatherService from '../services/weather.service';
import actionFactory from '../factories/action.factory';

export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const GET_CURRENT_WEATHER_SUCCESS = 'GET_CURRENT_WEATHER_SUCCESS';
export const GET_CURRENT_WEATHER_FAIL = 'GET_CURRENT_WEATHER_FAIL';

export default class WeatherActions {
  static getCurrentWeatherFor(location) {
    return (dispatch) => {
      dispatch(actionFactory(GET_CURRENT_WEATHER));
      return WeatherService.getWeatherFor(location)
        .then((response) => {
          dispatch(actionFactory(GET_CURRENT_WEATHER_SUCCESS, response.data));
        })
        .catch((error) => {
          dispatch(actionFactory(GET_CURRENT_WEATHER_FAIL, error));
          return Promise.reject(error);
        });
    };
  }
}
