import {Image, Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/colors';

export function ButtonGradient({onPress, buttonImage}) {
  return (
    <LinearGradient
      style={styles.submitButtonOuter}
      colors={[Colors.primary500, Colors.secondary500]}
      // top left is the start point, top right is the end point
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Pressable
        style={styles.submitButtonInnerContainer}
        android_ripple={{color: Colors.primary600, borderless: true}} // ripple effect - ask about it
        onPress={onPress}>
        <Image style={styles.arrowIcon} source={buttonImage} />
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  submitButtonOuter: {
    width: 70,
    height: 70,
    borderRadius: 50,
    useAngle: true,
    angle: 45,
    angleCenter: {x: 0.5, y: 0.2},
  },
  submitButtonInnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 30,
    height: 30,
  },
});
