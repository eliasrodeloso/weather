import {
  GET_CURRENT_WEATHER,
  GET_CURRENT_WEATHER_FAIL,
  GET_CURRENT_WEATHER_SUCCESS
} from '../actions/weather.actions';

const initialState = {
  location: {},
  current: {},
  forecast: {},
  isLoading: false,
  error: false
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return { ...state, isLoading: true };

    case GET_CURRENT_WEATHER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: true,
        response: action.payload
      };

    case GET_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        ...action.payload
      };

    default:
      return state;
  }
};

export default weatherReducer;
