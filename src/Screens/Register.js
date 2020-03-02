import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../Public/redux/actions/user';

const Register = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const {isPending} = useSelector(state => state.user);

  useEffect(() => {});

  const clear = () => {
    setEmail('');
    setPassword('');
    setRepeat('');
    setUsername('');
    setAddress('');
    setPhone('');
    props.navigation.navigate('Login');
  };

  const signup = async () => {
    const data = {
      email,
      password,
      username,
      address,
      phone,
    };
    await dispatch(register(data));
    Alert.alert(
      'Congratulation',
      'Succes Register, please Login!',
      [{text: 'OK', onPress: () => clear()}],
      {cancelable: false},
    );
  };
  return (
    <>
      <View style={styles.top} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#362dae"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.welcomeText}>
            <Text style={styles.txtTop}>Let's</Text>
            <Text style={styles.txtBotom}>
              create your <Text style={styles.bgBlue}>account!</Text>
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Profil Name"
              onChangeText={e => setUsername(e)}
              value={username}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              keyboardType={'email-address'}
              onChangeText={e => setEmail(e)}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Password"
              onChangeText={e => setPassword(e)}
              value={password}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Repeat Password"
              onChangeText={e => setRepeat(e)}
              value={repeat}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Phone Number"
              keyboardType={'number-pad'}
              onChangeText={e => setPhone(e)}
              value={phone}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Address"
              multiline
              onChangeText={e => setAddress(e)}
              value={address}
            />
          </View>
          <View style={styles.botom}>
            <TouchableOpacity onPress={() => signup()}>
              {isPending ? (
                <ActivityIndicator size="large" color="#285bd4" />
              ) : (
                <Text style={styles.btn}>SIGN UP</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.have}>Arealy have an account ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const values = {
  light: '#FCFCFC',
  primaryColor: '#362DAE',
  form: '#FFF',
  success: '#48C888',
  fail: '#F54444',
  accent: '#E0EF0F',
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: values.form,
    color: '#888',
    borderRadius: 4,
    fontSize: 16,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
  },

  top: {
    width: 350,
    height: 350,
    backgroundColor: '#362dae',
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: 350,
  },
  txtBotom: {fontSize: 24, color: values.light},
  txtTop: {fontSize: 32, color: values.light},
  welcomeText: {
    paddingVertical: 80,
    alignItems: 'flex-end',
  },
  botom: {
    marginTop: 40,
    alignItems: 'center',
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: values.light,
    backgroundColor: values.primaryColor,
    fontWeight: 'bold',
  },
  have: {
    color: values.primaryColor,
    fontSize: 16,
    marginTop: 20,
  },
});

export default Register;
