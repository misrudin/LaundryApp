import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Acount = () => {
  return (
    <>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <View style={styles.profil}>
            <View style={styles.imgRound}>
              <Image
                source={require('../Assets/Img/1.jpg')}
                style={styles.imgProfil}
              />
            </View>
            <View style={styles.nameArea}>
              <Text style={styles.name}>Profile Namenya Panjang</Text>
            </View>
            <Text style={[styles.address, styles.all]}>Address</Text>
            <Text style={[styles.phone, styles.all]}>082257313997</Text>
            <Text style={[styles.point, styles.all]}>50</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Change Profile</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Change Password</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Daftar Laundry</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Tukar Poin</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Aktivitas</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Logout</Text>
            <Icon name="chevron-right" size={20} color="#ddd" />
          </View>
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
