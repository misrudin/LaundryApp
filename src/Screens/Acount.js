import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
// const jwtDecode = require('jwt-decode');
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {Link} from '../Public/env';

const URL = Link();

const Acount = props => {
  const dispatch = useDispatch();
  const [dataUser, setData] = useState([]);
  const [userrole, setRole] = useState([]);
  const [userid, setId] = useState([]);

  const clearToken = async () => {
    await AsyncStorage.removeItem('Token');
    await AsyncStorage.removeItem('id');
    await props.navigation.navigate('Splash');
  };

  const logout = () => {
    Alert.alert(
      'Confirm Logout',
      'Do you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => clearToken()},
      ],
      {cancelable: false},
    );
  };

  const getuser = async id => {
    await axios
      .get(URL + `user?id=${id}`)
      .then(res => {
        setData(res.data.result[0]);
      })
      .catch(err => console.log(err));
  };

  const getToken = async () => {
    await AsyncStorage.getItem('id', (err, id) => {
      getuser(id);
      setId(id);
    });
    await AsyncStorage.getItem('role', (err, role) => {
      setRole(role);
    });
  };

  useEffect(() => {
    getToken();
    const _unsubscribe = props.navigation.addListener('focus', () => {
      getToken();
    });
  }, []);

  return (
    <>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <View style={styles.profil}>
            {dataUser ? (
              <>
                <View style={styles.imgRound}>
                  <Image
                    source={{uri: dataUser.image}}
                    style={styles.imgProfil}
                  />
                </View>
                <View style={styles.nameArea}>
                  <Text style={styles.name}>{dataUser.username}</Text>
                </View>
                <Text style={[styles.address, styles.all]}>
                  {dataUser.address}
                </Text>
                <Text style={[styles.phone, styles.all]}>{dataUser.phone}</Text>
                <Text style={[styles.point, styles.all]}>{dataUser.point}</Text>
              </>
            ) : null}
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Change Profile</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Change Password</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </View>
          {userrole === '1' ? (
            <TouchableOpacity
              style={styles.subContent}
              onPress={() =>
                props.navigation.navigate('Open', {id_user: userid})
              }>
              <Text style={styles.text}>List Laundry</Text>
              <Icon name="chevron-right" size={20} color="#ddd" />
            </TouchableOpacity>
          ) : null}
          <View style={styles.subContent}>
            <Text style={styles.text}>Point Exchange</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Activity</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </View>
          <TouchableOpacity style={styles.subContent} onPress={() => logout()}>
            <Text style={styles.text}>Logout</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingBottom: 16,
  },
  profil: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
  },
  imgProfil: {
    width: '100%',
    height: '100%',
  },
  imgRound: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#eee',
    overflow: 'hidden',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#242323',
    marginRight: 10,
  },
  nameArea: {
    flexDirection: 'row',
  },
  address: {
    color: '#ddd',
    fontSize: 16,
  },
  phone: {
    color: '#777',
    fontSize: 16,
  },
  point: {
    color: '#059e05',
    fontSize: 16,
    fontWeight: 'bold',
  },
  all: {
    marginTop: 10,
  },
  content: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: '#242323',
    marginRight: 10,
  },
  subContent: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
  },
});
export default Acount;
