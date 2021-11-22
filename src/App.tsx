/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import colors from '@res/values/colors';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '@screens/OnboardingScreen';
import SplashScreen from '@screens/SplashScreen';
import {useAppSelector} from '@reduxStore/hooks';
import {selectGo} from '@reduxStore/splash/splashSlice';

const App = () => {
  const go = useAppSelector(selectGo);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.mainBack} barStyle={'dark-content'} />
      {go ? <OnboardingScreen /> : <SplashScreen />}
      {/* <OnboardingScreen /> */}
    </NavigationContainer>
  );
};

export default App;
