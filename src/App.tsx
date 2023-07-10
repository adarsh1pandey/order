import {View} from 'react-native';
import React, {useEffect} from 'react';
// import Orders from './screens/Orders/Orders';
// import Login from './screens/Login/Login';
import AppNavigator from './Navigator/AppNavigator';
import messaging from '@react-native-firebase/messaging';
import remoteConfig from '@react-native-firebase/remote-config';

const App = () => {
  useEffect(() => {
    async function fetchRemoteConfig() {
      try {
        await remoteConfig().fetchAndActivate();
        const baseApiUrl = remoteConfig().getValue('url1').asString();
        const baseApiUrl2 = remoteConfig().getValue('url2').asString();
        // Use the base URL in your API calls
        console.log('API Base URL:', baseApiUrl, baseApiUrl2);
        // Make your API requests using the retrieved base URL
        // e.g., axios.get(`${baseApiUrl}/endpoint`)
      } catch (error) {
        console.error('Failed to fetch remote config:', error);
      }
    }

    fetchRemoteConfig();
    getToken();
  });
  const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log(token, 'this is token');
  };
  return (
    <View style={{flex: 1}}>
      {/* <Orders /> */}
      {/* <Login /> */}
      <AppNavigator />
    </View>
  );
};

export default App;
