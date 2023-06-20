import {View} from 'react-native';
import React from 'react';
// import Orders from './screens/Orders/Orders';
import Login from './screens/Login/Login';
import AppNavigator from './Navigator/AppNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Orders /> */}
      {/* <Login /> */}
      <AppNavigator />
    </View>
  );
};

export default App;
