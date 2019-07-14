import WeatherService from '../services/weather.service';
import actionFactory from '../factories/action.factory';

export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const GET_CURRENT_WEATHER_SUCCESS = 'GET_CURRENT_WEATHER_SUCCESS';
export const GET_CURRENT_WEATHER_FAIL = 'GET_CURRENT_WEATHER_FAIL';
export const GET_WEATHER_FOR_DAYS = 'GET_WEATHER_FOR_DAYS';
export const GET_WEATHER_FOR_DAYS_SUCCESS = 'GET_WEATHER_FOR_DAYS_SUCCESS';
export const GET_WEATHER_FOR_DAYS_FAIL = 'GET_WEATHER_FOR_DAYS_FAIL';
export const CHANGE_SELECTED_LOCATION = 'CHANGE_SELECTED_LOCATION';

export default class WeatherActions {
  static getCurrentWeatherFor(location) {
    return (dispatch) => {
      dispatch(actionFactory(GET_CURRENT_WEATHER));
      return WeatherService.getCurrentWeatherFor(location)
        .then((response) => {
          dispatch(actionFactory(GET_CURRENT_WEATHER_SUCCESS, response.data));
        })
        .catch((error) => {
          dispatch(actionFactory(GET_CURRENT_WEATHER_FAIL, error));
          return Promise.reject(error);
        });
    };
  }

  static getWeatherFor({ location, days }) {
    return (dispatch) => {
      if (location !== 'none') {
        dispatch(actionFactory(GET_WEATHER_FOR_DAYS));
        return WeatherService.getWeatherFor(location, days)
          .then((response) => {
            dispatch(
              actionFactory(GET_WEATHER_FOR_DAYS_SUCCESS, response.data)
            );
          })
          .catch((error) => {
            dispatch(actionFactory(GET_WEATHER_FOR_DAYS_FAIL, error));
            return Promise.reject(error);
          });
      }
      return Promise.reject(new Error('None is not a value'));
    };
  }

  static changeSelectedLocation(newLocation) {
    return (dispatch) => {
      if (newLocation !== 'none') {
        dispatch(actionFactory(CHANGE_SELECTED_LOCATION, newLocation));
      }
    };
  }
}
