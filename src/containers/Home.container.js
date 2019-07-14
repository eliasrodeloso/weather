import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePage from '../components/pages/home/Home.page';
import WeatherActions from '../core/actions/weather.actions';

const mapStateToProps = state => ({
  store: state.weatherStore
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getCurrentWeatherFor: WeatherActions.getCurrentWeatherFor,
      getWeatherFor: WeatherActions.getWeatherFor,
      changeLocation: WeatherActions.changeSelectedLocation
    },
    dispatch
  )
});

const mapOwnProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mapOwnProps
)(HomePage);
