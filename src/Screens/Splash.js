import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const Splash = props => {
  const [token, setToken] = useState(null);

  // getToken = async () => {s
  //   await AsyncStorage.getItem('Token', (err, token) => {
  //     this.setState(
  //       {
  //         tokenData: token,
  //       }
  //     );
  //   });
  // };

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFF"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.horizontal}>
        {/* <ActivityIndicator size="large" color="#ff33ff" /> */}
        <Text style={styles.logo}>LOGO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  horizontal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#285bd4',
    fontSize: 50,
    fontWeight: 'bold',
  },
});
