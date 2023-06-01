import {StyleSheet, View} from 'react-native';
import {SignIn} from '../components/SignIn';
import {NavHeader} from '../components/car/Header';
export function CarLogin() {
  return (
    <View style={styles.screen}>
      <NavHeader logo={require('../assets/logomycar.png')}></NavHeader>
      <SignIn applicationName={'אמדוקס'} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
