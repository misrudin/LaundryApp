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
              <View style={styles.detailName}>
                <Text style={styles.address}>Jl. haji dahlan no 09</Text>
                <Text style={styles.address}>.</Text>
                <Text style={styles.address}>Jl. haji dahlan no 09</Text>
              </View>
              <View style={styles.rating}>
                <Text style={styles.address}>Jl. haji dahlan no 09</Text>
                <Text style={styles.address}>Jl. haji dahlan no 09</Text>
              </View>
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
    borderRadius: 10,
    margin: 4,
  },
  thumb: {
    width: 130,
    height: 130,
    borderRadius: 4,
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
  daftar: {
    color: '#acacac',
  },
  detailName: {
    flexDirection: 'row',
  },
});
export default ListLaundry;
