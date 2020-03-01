import React from 'react';
import MainNavigators from './src/Public/Navigators/MainNavigators';

import {Provider} from 'react-redux';
import store from './src/Public/redux/store';
// console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigators />
    </Provider>
  );
};

export default App;
