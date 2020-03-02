import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../Public/redux/actions/user';
import AsyncStorage from '@react-native-community/async-storage';

const Login = props => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isPending, isFulfilled, datalogin} = useSelector(state => state.user);

  const clear = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (isFulfilled) {
      if (!datalogin.token) {
        setMessage(datalogin.message);
      } else {
        setMessage('');
        saveToken(datalogin.token);
        props.navigation.navigate('User');
        clear();
      }
    }
  });

  const saveToken = async data => {
    try {
      const token = data;
      await AsyncStorage.setItem('Token', token);
    } catch (error) {
      console.warn(error.message);
    }
  };

  const signin = async () => {
    const data = {
      email,
      password,
    };
    await dispatch(login(data));
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
            <Text style={styles.txtTop}>Hello</Text>
            <Text style={styles.txtBotom}>clean and clear!</Text>
          </View>
          <Text style={styles.txtDanger}>{message}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.textInput,
                message !== 'Invalid Password!!' && message !== ''
                  ? styles.txtErr
                  : null,
              ]}
              placeholder="Email"
              keyboardType={'email-address'}
              onChangeText={e => setEmail(e)}
              value={email}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={true}
              style={[
                styles.textInput,
                message === 'Invalid Password!!' && message !== ''
                  ? styles.txtErr
                  : null,
              ]}
              placeholder="Password"
              onChangeText={e => setPassword(e)}
              value={password}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.botom}>
            <TouchableOpacity onPress={() => signin()}>
              {isPending ? (
                <ActivityIndicator size="large" color="#285bd4" />
              ) : (
                <Text style={styles.btn}>SIGN IN</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Register')}>
              <Text style={styles.have}>
                Not have an account ? <Text style={styles.sign}>SIGN UP</Text>
              </Text>
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
    width: 150,
    height: 400,
    backgroundColor: '#362dae',
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: 200,
  },
  txtBotom: {fontSize: 24, color: values.primaryColor},
  txtTop: {fontSize: 32, color: values.primaryColor},
  welcomeText: {
    paddingVertical: 80,
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
    borderWidth: 1,
    borderColor: values.light,
  },
  have: {
    color: '#888',
    fontSize: 16,
    marginTop: 20,
  },
  sign: {
    color: values.primaryColor,
  },
  txtDanger: {
    color: 'red',
  },
  txtErr: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default Login;
