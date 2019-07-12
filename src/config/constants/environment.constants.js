const envConstants = {
  development: {
    basename: '',
    API_URL: 'http://api.apixu.com/v1',
    FORECAST_URI: '/forecast.json',
    CURRENT_URI: '/current.json'
  },
  production: {
    basename: '',
    API_URL: 'http://api.apixu.com/v1',
    FORECAST_URI: '/forecast.json',
    CURRENT_URI: '/current.json'
  }
};

const currentEnv = envConstants[process.env.REACT_APP_ENV]
  ? envConstants[process.env.REACT_APP_ENV]
  : envConstants.development;

export default currentEnv;
