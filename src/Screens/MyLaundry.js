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

const URL = Link();

const MyLaundry = () => {
  const [laundry, setLaundry] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await axios
      .get(URL + `laundry/mylaundry?id=${3}`)
      .then(data => {
        setLaundry(data.data.result);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
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
            <TouchableOpacity>
              <Text>Edit Harga</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Edit Harga</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  body: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: 300,
  },
  footer: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },
});

export default MyLaundry;
