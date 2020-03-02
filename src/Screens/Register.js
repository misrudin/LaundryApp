import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {ScrollView} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

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

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      image: null,
      completeName: '',
    };
  }

  showImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        this.setState({
          image: source,
          imgSrc: response,
        });
      }
    });
  };

  regexTest = () => {
    const nameRegex = /[0-9]/;
    if (nameRegex.test(this.state.completeName)) {
      alert('bisa regex');
    } else {
      alert('ga kena regex');
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../Assets/Img/backgroundWoIll.png')}
        style={{width: '100%', height: '100%'}}>
        <ScrollView style={{paddingTop: 100}}>
          <View style={styles.container}>
            <View style={styles.welcomeText}>
              <Text style={{fontSize: 32, color: values.primaryColor}}>
                Let's
              </Text>
              <Text style={{fontSize: 24, color: values.primaryColor}}>
                create your account!
              </Text>
            </View>
            <View style={styles.lilContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.textInput, styles.regexCatch]}
                  placeholder="Complete Name"
                  onChangeText={completeName => this.setState({completeName})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Username" />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  secureTextEntry={true}
                  style={styles.textInput}
                  placeholder="Password"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  keyboardType={'email-address'}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Phone Number"
                  keyboardType={'number-pad'}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Address" />
              </View>
              <View style={styles.wrapper}>
                <View style={styles.pictCont}>
                  <TouchableOpacity
                    onPress={() => {
                      this.showImage();
                    }}>
                    <Image
                      source={this.state.image}
                      style={styles.pictureButton}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.genBirthCont}>
                  <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder="Gender" />
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Birth: MM/DD/YYYY"
                    />
                  </View>
                </View>
              </View>
              <View style={styles.signInButtonCont}>
                <TouchableOpacity onPress={() => this.regexTest()}>
                  <View style={styles.signInButton}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 18,
                        color: values.light,
                      }}>
                      SIGN UP
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.miscOption}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 24,
                      color: values.primaryColor,
                    }}>
                    Already have an account?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const values = {
  light: '#FCFCFC',
  primaryColor: '#362DAE',
  form: '#FFF',
  success: '#48C888',
  fail: '#F54444',
  accent: '#E0EF0F',
};

const styles = StyleSheet.create({
  alertButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 32,
    height: 32,
    right: 16,
  },
  regexCatch: {
    borderColor: values.fail,
    borderWidth: 1,
  },
  pictureButton: {
    backgroundColor: values.form,
    borderRadius: 8,
    width: '90%',
    height: '96%',
  },
  genBirthCont: {
    flex: 1.75,
  },
  pictCont: {
    justifyContent: 'center',
    flex: 1,
  },
  textInput: {
    backgroundColor: values.form,
    color: '#333',
    borderRadius: 4,
    fontSize: 16,
    width: '100%',
    height: '90%',
    paddingHorizontal: 10,
  },
  welcomeText: {
    marginBottom: 0,
    width: 250,
    height: 100,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  lilContainer: {
    // backgroundColor: 'orange',
    width: '70%',
    height: 450,
    marginBottom: 40,
  },
  inputContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  miscOption: {
    flex: 0.5,
    width: '100%',
  },
  miscOptionCheck: {
    marginTop: -8,
    flexDirection: 'row',
    flex: 0.5,
    width: '100%',
  },
  signInButton: {
    backgroundColor: values.primaryColor,
    minWidth: 208,
    height: 44,
    borderRadius: 100,
    marginTop: 32,
    justifyContent: 'center',
  },
  signInButtonCont: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    flex: 2,
  },
});

export default Register;
