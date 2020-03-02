import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {savetoken} from '../Public/redux/actions/user';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToken: '',
    };
  }
  getToken = async () => {
    await AsyncStorage.getItem('Token', (err, token) => {
      this.setState(
        {
          dataToken: token,
        },
        () => {
          this.props.dispatch(savetoken(this.state.dataToken));
        },
      );
    });
  };

  componentDidMount() {
    this.getToken();
    setTimeout(() => {
      if (this.state.dataToken) {
        this.props.navigation.navigate('User');
      } else {
        this.props.navigation.navigate('Login');
      }
    }, 2000);
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

const mapStateToProps = ({user}) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(Splash);
