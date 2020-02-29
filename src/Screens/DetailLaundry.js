import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Content, Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailLaundry = () => {
  return (
    <>
      <ScrollView style={{backgroundColor: '#ddd'}}>
        <View style={styles.container}>
          <View style={styles.imgArea}>
            <Image
              source={require('../Assets/Img/1.jpg')}
              style={styles.imgLaundry}
            />
          </View>
          <View style={styles.detail}>
            <Text style={styles.name}>Laundry KekMaria</Text>
            <Text style={styles.address}>Address</Text>
            <View style={styles.rating}>
              <Icon name="star" color="#059e05" />
              <Icon name="star" color="#059e05" />
              <Icon name="star" color="#059e05" />
              <Icon name="star" color="#059e05" />
              <Icon name="star" color="#059e05" />
            </View>
          </View>
        </View>
        <View style={styles.fitur}>
          <Text>Fitur</Text>
        </View>
      </ScrollView>
      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    flex: 1,
  },
  imgLaundry: {
    width: '100%',
    height: '100%',
  },
  imgArea: {
    height: 400,
    overflow: 'hidden',
  },
  detail: {
    marginTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  fitur: {
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#242323',
    marginRight: 10,
  },
  rating: {
    marginTop: 10,
    flexDirection: 'row',
  },
  address: {
    marginTop: 10,
    fontSize: 15,
    color: '#acacac',
  },
});
export default DetailLaundry;
