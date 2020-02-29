import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {Card} from 'native-base';

const List2 = () => {
  return (
    <Card>
      <View style={styles.content}>
        <View>
          <Image source={require('../Assets/Img/1.jpg')} style={styles.thumb} />
        </View>
        <View style={styles.detail}>
          <Text style={styles.name}>Budi Doremi</Text>
          <Text style={styles.des}>Detail</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.time}>3:30 pm</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
  },
  thumb: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: '#eee',
  },
  detail: {
    marginLeft: 10,
    flex: 1,
  },
  right: {
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#242323',
  },
  des: {
    fontSize: 15,
    color: '#acacac',
  },
  time: {
    color: '#acacac',
  },
});

export default List2;
