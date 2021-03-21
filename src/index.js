import React, {Component} from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './navigation/index';
import store from './redux/store';
class Root extends Component {
  render() {
    return <RootNavigator />;
    // <Provider store={store}>

    /* </Provider> */
  }
}
export default Root;
