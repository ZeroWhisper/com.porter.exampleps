import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import '~/config/reactotron';
import store from '~/store';
import Routes from '~/routes';

StatusBar.setBackgroundColor('#4A7AFF');
StatusBar.setBarStyle('light-content');

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
