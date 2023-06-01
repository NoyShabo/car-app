import {StyleSheet, View} from 'react-native';
import {SignIn} from '../components/SignIn';
import {NavHeader} from '../components/timer/Header';
export function TimerLogin() {
  return (
    <View style={styles.screen}>
      <NavHeader logo={require('../assets/logo.png')}>My Timer</NavHeader>
      <SignIn applicationName={'טיימר'} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
