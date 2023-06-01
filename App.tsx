/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {CarLogin} from './screens/CarLogin';
import {TimerLogin} from './screens/TimerLogin';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      {/* <TimerLogin /> */}
      <CarLogin />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
