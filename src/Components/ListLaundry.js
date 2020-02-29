import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Content, Card} from 'native-base';

const ListLaundry = () => {
  return (
    <Content>
      <Card style={styles.card}>
        <View style={styles.content}>
          <View style={styles.left}>
            <Image
              source={require('../Assets/Img/1.jpg')}
              style={styles.thumb}
            />
            <View style={styles.detail}>
              <Text style={styles.name}>Laundy Kekmaria</Text>
              <Text style={styles.address}>Jl. haji dahlan no 09</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.rating}>
              <Icon name="star" color="#059e05" />
              <Icon name="star" color="#059e05" />
              <Icon name="star" color="#059e05" />
              <Icon name="star" color="#059e05" />
              <Icon name="star" color="#059e05" />
            </View>
            <View>
              <Text style={styles.daftar}>Terdaftar sejak Maret 2020</Text>
            </View>
          </View>
        </View>
      </Card>
    </Content>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
    height: 150,
    borderRadius: 10,
    padding: 10,
    margin: 4,
    // borderColor: '#ddd',
    // borderWidth: 2,
  },
  thumb: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#eee',
  },
  left: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  detail: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#242323',
  },
  address: {
    fontSize: 15,
    color: '#acacac',
  },
  rating: {
    flexDirection: 'row',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  daftar: {
    color: '#acacac',
  },
  card: {
    borderRadius: 8,
    shadowColor: '#fff',
    shadowOpacity: 0.3,
  },
});
export default ListLaundry;
