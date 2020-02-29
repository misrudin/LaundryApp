import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Content, Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MyLaundry = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>header</Text>
      </View>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <View style={styles.topArea}>
            <Card style={styles.imgArea}>
              <View style={styles.img}>
                <Image
                  source={require('../Assets/Img/1.jpg')}
                  style={styles.imgLaundry}
                />
              </View>
              <View style={styles.detail}>
                <Text style={styles.name}>Laundy Kekmaria</Text>
                <Text style={styles.address}>Jl. haji dahlan no 09</Text>
                <View style={styles.rating}>
                  <Icon name="star" color="#059e05" />
                  <Icon name="star" color="#059e05" />
                  <Icon name="star" color="#059e05" />
                  <Icon name="star" color="#059e05" />
                  <Icon name="star" color="#059e05" />
                </View>
              </View>
            </Card>
          </View>
          <Card>
            <View style={styles.midArea}>
              <View style={styles.title}>
                <Text style={styles.name}>Details</Text>
                <Icon name="edit" size={20} color="#059e05" />
              </View>
              <View style={styles.body}>
                <Text style={styles.nameDetail}>Address</Text>
                <Text style={styles.details}>Jl. haji dahlan no 20</Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.nameDetail}>Phone</Text>
                <Text style={styles.details}>082257313997</Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.nameDetail}>Jam Buka</Text>
                <Text style={styles.details}>07.00 - 17.00</Text>
              </View>
            </View>
          </Card>
          <Card>
            <View style={styles.midArea}>
              <View style={styles.title}>
                <Text style={styles.name}>Features</Text>
                <Icon name="edit" size={20} color="#059e05" />
              </View>
              <View style={styles.fitur}>
                <Text style={styles.nameDetail}>Qty</Text>
                <View style={styles.areaFitur}>
                  <View style={styles.contentFitur}>
                    <Text style={styles.textFitur}>Satuan</Text>
                  </View>
                  <View style={styles.contentFitur}>
                    <Text style={styles.textFitur}>Kiloan</Text>
                  </View>
                </View>
              </View>
              <View style={styles.fitur}>
                <Text style={styles.nameDetail}>Metode</Text>
                <View style={styles.areaFitur}>
                  <View style={styles.contentFitur}>
                    <Text style={styles.textFitur}>Antar Jemput</Text>
                  </View>
                  <View style={styles.contentFitur}>
                    <Text style={styles.textFitur}>Antar</Text>
                  </View>
                  <View style={styles.contentFitur}>
                    <Text style={styles.textFitur}>Jemput</Text>
                  </View>
                </View>
              </View>
              <View style={styles.fitur}>
                <Text style={styles.nameDetail}>Estimasi</Text>
                <View style={styles.areaFitur}>
                  <View style={styles.contentFitur}>
                    <Text style={styles.textFitur}>Express</Text>
                  </View>
                  <View style={styles.contentFitur}>
                    <Text style={styles.textFitur}>Biasa</Text>
                  </View>
                </View>
              </View>
            </View>
          </Card>
          <Card>
            <View style={styles.midArea}>
              <View style={styles.title}>
                <Text style={styles.name}>History</Text>
              </View>
            </View>
          </Card>
          <Card>
            <View style={styles.midArea}>
              <View style={styles.title}>
                <Text style={styles.name}>History</Text>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: '#f554ff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  txtHeader: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  topArea: {
    width: '100%',
    marginTop: 10,
  },
  imgArea: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 100,
    position: 'relative',
    overflow: 'hidden',
  },
  imgLaundry: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#242323',
    marginBottom: 10,
  },
  rating: {
    marginTop: 10,
    flexDirection: 'row',
  },
  address: {
    fontSize: 15,
    color: '#acacac',
  },
  detail: {
    marginLeft: 10,
    paddingVertical: 10,
  },
  midArea: {
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nameDetail: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#242323',
    marginBottom: 10,
  },
  details: {
    color: '#242323',
  },
  textFitur: {
    borderWidth: 2,
    borderColor: '#059e05',
    borderRadius: 100,
    color: '#059e05',
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 8,
    textAlign: 'center',
    alignItems: 'center',
    height: 30,
  },
  areaFitur: {
    flexDirection: 'row',
    paddingVertical: 10,
    flexWrap: 'wrap',
  },
  contentFitur: {
    backgroundColor: '#fff',
    marginTop: 5,
    marginRight: 5,
  },
});

export default MyLaundry;
