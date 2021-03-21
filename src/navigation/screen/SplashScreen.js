import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
export default SplashScreen = () => (
  <SafeAreaView
    style={{
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
    <ActivityIndicator size="large" color="black" />
  </SafeAreaView>
);
