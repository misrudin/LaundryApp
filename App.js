import React from 'react';
import MainNavigators from './src/Public/Navigators/MainNavigators';
import Laundry from './src/Screens/Laundry';

import {Provider} from 'react-redux';
import store from './src/Public/redux/store';
console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigators />
    </Provider>
  );
};

export default App;
