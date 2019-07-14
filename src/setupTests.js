import { configure } from 'enzyme'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-16'; // eslint-disable-line

configure({ adapter: new Adapter() });

window.matchMedia = window.matchMedia
  || function() {
    return {
      matches: false,
      addListener() {},
      removeListener() {}
    };
  };
