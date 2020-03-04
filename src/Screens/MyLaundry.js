import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {Link} from '../Public/env';
import AsyncStorage from '@react-native-community/async-storage';

const URL = Link();

const MyLaundry = props => {
  const [laundry, setLaundry] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [id, setId] = useState('');

  const getData = async id => {
    await axios
      .get(URL + `laundry/mylaundry?id=${id}`)
      .then(data => {
        setLaundry(data.data.result);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  const getToken = async () => {
    await AsyncStorage.getItem('id', (err, id) => {
      // setId(id);
      getData(id);
    });
  };

  useEffect(() => {
    const _unsubscribe = props.navigation.addListener('focus', () => {
      getToken();
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#285bd4" />
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.txtHeader}>{laundry[0].name}</Text>
          </View>
          <View style={styles.body}>
            <Image source={{uri: laundry[0].image}} style={styles.img} />
          </View>
          <View style={styles.footer}>
            <Text style={styles.head}>Qty</Text>
            <Text style={styles.head}>Metode</Text>
            <Text style={styles.head}>Estimasi</Text>
          </View>
          <View style={styles.footerContent}>
            <Text style={styles.content}>Kiloan</Text>
            <Text style={styles.content}>Antar Jemput</Text>
            <Text style={styles.content}>Biasa</Text>
          </View>
          <View style={styles.footerContent}>
            <Text style={styles.content}>Satuan</Text>
            <Text style={styles.content} />
            <Text style={styles.content}>Expres</Text>
          </View>
          <View style={styles.footerBtn}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('EditLaundry', {data: laundry})
              }>
              <Text style={styles.btn}>Edit Detail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('EditHarga', {data: laundry})
              }>
              <Text style={styles.btn}>Price</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#362dae',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  txtHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: 300,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  head: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContent: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 5,
    justifyContent: 'space-between',
  },
  footerBtn: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 50,
    justifyContent: 'space-around',
  },
  btn: {
    backgroundColor: '#362dae',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MyLaundry;
