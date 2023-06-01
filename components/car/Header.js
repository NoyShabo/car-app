import {Image, StyleSheet, Text, View} from 'react-native';

export function NavHeader({children, logo}) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.textHeader}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 60,
    position: 'absolute',
    right: 30,
    top: 100,
  },
  textHeader: {
    color: '#000',
    fontWeight: '800',
    fontSize: 36,
  },
});
