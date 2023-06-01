import {StyleSheet, Text, View} from 'react-native';
import Inputs from './Inputs';

export function SignIn({applicationName}) {
  return (
    <View style={styles.signupPage}>
      <Text style={styles.signupText}>
        להתחברות לאפליקציית {applicationName} אנא הזינו את מספר הטלפון והמייל
        שלכם
      </Text>
      <Inputs />
    </View>
  );
}

const styles = StyleSheet.create({
  signupPage: {
    flex: 1,
  },
  signupText: {
    marginTop: 120,
    paddingHorizontal: 40,
    paddingBottom: 10,
    fontSize: 16,
  },
});
