import {
  GET_CURRENT_WEATHER,
  GET_CURRENT_WEATHER_FAIL,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_WEATHER_FOR_DAYS,
  GET_WEATHER_FOR_DAYS_FAIL,
  GET_WEATHER_FOR_DAYS_SUCCESS,
  CHANGE_SELECTED_LOCATION
} from '../actions/weather.actions';

const initialState = {
  location: {},
  current: null,
  forecast: null,
  isLoading: false,
  error: false,
  selectedLocation: 'none'
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

    case GET_WEATHER_FOR_DAYS:
      return { ...state, isLoading: true };

    case GET_WEATHER_FOR_DAYS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: true,
        response: action.payload
      };

    case GET_WEATHER_FOR_DAYS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        ...action.payload
      };

    case CHANGE_SELECTED_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload
      };

    default:
      return state;
  }
};

export default weatherReducer;
