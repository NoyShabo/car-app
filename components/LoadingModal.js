import {Image, Modal, StyleSheet} from 'react-native';

export function LoadingModal({isLoading}) {
  return (
    <Modal style={styles.container} visible={isLoading} animationType="slide">
      <Image
        source={require('../assets/loading.gif')}
        style={styles.image}
        resizeMode="cover"
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    // to ask chen about it
    // width: 300,
    // height: 300,
    // position: 'absolute',
    // top: '-50%',
    // left: '-50%',
    // transform: [{translateX: -150}, {translateY: -150}],
  },
  image: {
    width: 400,
    height: 200,
    marginTop: 200,
  },
});
