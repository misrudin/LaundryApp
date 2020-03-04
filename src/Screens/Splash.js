import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {savetoken} from '../Public/redux/actions/user';
import {useSelector} from 'react-redux';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToken: '',
      userrole: '',
    };
  }
  getToken = async () => {
    await AsyncStorage.getItem('Token', (err, token) => {
      this.setState({
        dataToken: token,
      });
    });
    await AsyncStorage.getItem('role', (err, role) => {
      this.setState({
        userrole: role,
      });
    });
  };

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getToken();
      setTimeout(() => {
        if (this.state.dataToken) {
          if (this.state.userrole === '1') {
            this.props.navigation.navigate('User');
          } else {
            this.props.navigation.navigate('Mitra');
          }
        } else {
          this.props.navigation.navigate('Login');
        }
      }, 1500);
    });
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#362dae"
          translucent={false}
          networkActivityIndicatorVisible={true}
        />
        <ImageBackground
          source={require('../Assets/Img/background.png')}
          style={styles.splash}>
          <View style={styles.container}>
            <View style={styles.horizontal}>
              <Text style={styles.logo}>LOGO</Text>
            </View>
          </View>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 200,
  },
  horizontal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#362dae',
    fontSize: 50,
    fontWeight: 'bold',
  },
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
