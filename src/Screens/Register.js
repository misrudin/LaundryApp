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
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../Public/redux/actions/user';

const Register = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setmsg] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [msg, setMsg] = useState('');
  const dispatch = useDispatch();
  const {isPending} = useSelector(state => state.user);

  const showImage = () => {
    const options = {
      title: 'Add product image',
      mediaType: 'photo',
      maxWidth: 1024,
      maxHeight: 1024,
      noData: true,
      cropping: true,
      storageOptions: {
        skipBackup: true,
        path: 'posApp',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else {
        let fileName = response.fileName;
        let fileSize = response.fileSize;
        if (/.(jpg|gif|png|jpeg)/g.test(fileName)) {
          if (fileSize > 102400) {
            Alert.alert('Image To Large, max 1 Mb!');
            setImage('');
          } else {
            setImage(response);
          }
        } else {
          Alert.alert('Only image allowed!');
        }
      }
    });
  };

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
<<<<<<< HEAD
    if ((email, password, username, address, phone, image)) {
      let fd = new FormData();
      fd.append('email', email);
      fd.append('password', password);
      fd.append('username', username);
      fd.append('address', address);
      fd.append('phone', phone);
      fd.append('image', {
        uri: image.uri,
        name: image.fileName,
        type: image.type,
      });
      await dispatch(register(fd));
      Alert.alert(
        'Congratulation',
        'Succes Register, please Login!',
        [{text: 'OK', onPress: () => clear()}],
        {cancelable: false},
      );
    } else {
      Alert.alert('Opss', 'Comlete data!');
    }
  };

  const regexTest = key => {
    switch (key) {
      case 'username':
        const usernameRegex = /\s/;
        if (usernameRegex.test(username)) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      case 'PASSWORD':
        if (
          password.length !== 0 &&
          (password.length < 6 || password.length > 12)
        ) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      case 'repeat':
        if (repeat !== password) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      case 'email':
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email !== '' && !emailRegex.test(email)) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      case 'PHONE':
        const phoneRegex = /08\d/;
        if (phone !== '' && !phoneRegex.test(phone)) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      default:
        null;
    }
  };

=======
    iterateRegex();
    let fd = new FormData();
    fd.append('email', email);
    fd.append('password', password);
    fd.append('username', username);
    fd.append('address', address);
    fd.append('phone', phone);
    fd.append('image', {
      uri: image.uri,
      name: image.fileName,
      type: image.type,
    });
    await dispatch(register(fd));
    Alert.alert(
      'Congratulation',
      'Succes Register, please Login!',
      [{text: 'OK', onPress: () => clear()}],
      {cancelable: false},
    );
  };

  const iterateRegex = () => {
    const usernameRegex = /\s/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /08\d/;
    if (usernameRegex.test(username)) {
      setMsg('Username cannot contain space!');
    } else if (repeat !== password) {
      setMsg('Password does not match');
    } else if (email !== '' && !emailRegex.test(email)) {
      setMsg('Please enter a valid email!');
    } else if (
      password.length !== 0 &&
      (password.length < 8 || password.length > 12)
    ) {
      setMsg('Password length is 8 - 12 characters!');
    } else if (phone !== '' && !phoneRegex.test(phone)) {
      setMsg('Phone number start with 08');
    } else {
      setMsg('');
    }
  };

  const regexTest = key => {
    switch (key) {
      case 'username':
        const usernameRegex = /\s/;
        if (usernameRegex.test(username)) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      case 'email':
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.length !== 0 && !emailRegex.test(email)) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      case 'password':
        if (
          password.length !== 0 &&
          (password.length < 8 || password.length > 12)
        ) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      case 'rePassword':
        if (repeat.length !== 0 && repeat !== password) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      case 'phone':
        const phoneRegex = /08\d/;
        if (phone !== '' && !phoneRegex.test(phone)) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      default:
        null;
    }
  };
>>>>>>> 201a58095438ce9ecbfd548dceef54ea857f24cc
  return (
    <>
      <View style={styles.top} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={values.primaryColor}
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
          <View style={styles.containTop}>
            <View style={styles.left}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={regexTest('username')}
                  placeholder="Profil Name"
                  onChangeText={e => setUsername(e)}
                  value={username}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={regexTest('email')}
                  placeholder="Email"
                  keyboardType={'email-address'}
                  onChangeText={e => setEmail(e)}
                  autoCapitalize="none"
                  value={email}
                />
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.inputContainer}>
                <TouchableOpacity onPress={showImage}>
                  <Image source={{uri: image.uri}} style={styles.img} />
                </TouchableOpacity>
                <Text style={image!=='' ? [styles.txtAddimage, {opacity: 0}] : styles.txtAddimage}>Add Image</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={true}
<<<<<<< HEAD
              style={regexTest('PASSWORD')}
=======
              style={regexTest('password')}
>>>>>>> 201a58095438ce9ecbfd548dceef54ea857f24cc
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={e => setPassword(e)}
              value={password}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={true}
<<<<<<< HEAD
              style={regexTest('repeat')}
=======
              style={regexTest('rePassword')}
>>>>>>> 201a58095438ce9ecbfd548dceef54ea857f24cc
              placeholder="Repeat Password"
              autoCapitalize="none"
              onChangeText={e => setRepeat(e)}
              value={repeat}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
<<<<<<< HEAD
              style={regexTest('PHONE')}
=======
              style={regexTest('phone')}
>>>>>>> 201a58095438ce9ecbfd548dceef54ea857f24cc
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
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 8,
            }}>
            <Text style={{color: values.fail, fontSize: 16}}>{msg}</Text>
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
              <Text style={styles.have}>
                Already have an account?{' '}
                <Text style={{color: values.primaryColor}}>SIGN IN</Text>
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
  regexCatch: {
    borderWidth: 1,
    borderColor: values.fail,
  },
  textInput: {
    backgroundColor: values.form,
    color: '#888',
    borderRadius: 4,
    fontSize: 16,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  regexCatch: {
    borderColor: values.fail,
    borderWidth: 1,
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
    alignItems: 'flex-end',
  },
  botom: {
    marginTop: 16,
    alignItems: 'center',
  },
  btn: {
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 64,
    borderRadius: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: values.light,
    backgroundColor: values.primaryColor,
  },
  have: {
    color: '#888',
    fontSize: 14,
    marginTop: 16,
  },
  img: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  containTop: {
    marginTop: 32,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    marginRight: 10,
  },
  txtAddimage: {
    position: 'absolute',
    color: '#888',
  },
  right: {
    justifyContent: 'center',
  },
});

export default Register;
