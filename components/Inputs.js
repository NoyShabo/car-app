import {useState} from 'react';
import {
  Image,
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ButtonGradient} from './Button';
import {LoadingModal} from './LoadingModal';

export default function Inputs() {
  const [numberInput, setNumberInput] = useState('');
  const [email, setemailInput] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handelSubmit = () => {
    console.log('submit');
    setNumberInput('');
    setemailInput('');
    setIsSubmit(true);
  };
  const handelInputNumber = text => {
    const reg = new RegExp(/^([0-9]+-)*([0-9]+)$/);
    if (reg.test(text) || text === '') {
      setNumberInput(text);
    }
  };
  const handelGetHelp = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <>
      <LoadingModal isLoading={isSubmit} />
      <View style={styles.inputsContainer}>
        <View style={styles.inputInnerContainer}>
          <Image
            style={styles.imageIcon}
            source={require('../assets/phoneIcon.png')}
          />
          <TextInput
            style={styles.textInput}
            placeholder="מספר טלפון"
            onChangeText={handelInputNumber}
            value={numberInput}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputInnerContainer}>
          <Image
            style={styles.imageIcon}
            source={require('../assets/emailIcon.png')}
          />

          <TextInput
            style={styles.textInput}
            placeholder="כתובת מייל"
            onChangeText={text => setemailInput(text)}
            value={email}
          />
        </View>
      </View>
      <View>
        <View style={styles.footer}>
          <ButtonGradient
            onPress={handelSubmit}
            buttonImage={require('../assets/login-button-arrow.png')}
          />
          <View>
            <Text style={styles.helpTxt}>צריך עזרה?</Text>
            <View>
              <Text style={styles.link} onPress={handelGetHelp}>
                יצירת קשר עם התמיכה
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputsContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  inputInnerContainer: {
    alignItems: 'stretch',
    width: '100%',
    // flex: 1,
    flexDirection: 'row',
  },
  imageIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#8484849e',
    color: '#8484849e',
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    paddingRight: 50,
  },
  helpTxt: {
    fontWeight: 'bold',
    color: '#000',
  },
  link: {
    color: '#4787ff',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? 10 : 160,
    marginHorizontal: 30,
  },
});
