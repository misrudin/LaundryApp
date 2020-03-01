import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListLaundry = props => {
  return (
    <>
      {/* // <Card> */}
      <View style={styles.content}>
        <View style={styles.left}>
          <View style={styles.img}>
            <Image source={{uri: props.data.image}} style={styles.thumb} />
          </View>
          <View style={styles.detail}>
            <View style={styles.top}>
              <Text style={styles.name}>{props.data.name}</Text>
              <View style={styles.status}>
                <View
                  style={
                    props.data.status === 'Online'
                      ? styles.active
                      : styles.noactive
                  }
                />
                <Text
                  style={
                    props.data.status === 'Online'
                      ? styles.txtBlue
                      : styles.txtGray
                  }>
                  {props.data.status}
                </Text>
              </View>
            </View>
            <View style={styles.body}>
              <Text style={styles.txtGray}>{props.data.address}</Text>
              <View style={styles.cta}>
                <Text style={styles.txtBlue}>Cuci sekarang - </Text>
                <Text style={styles.txtBlue}>Rp. {props.data.minimum} /kg</Text>
              </View>
              <View style={styles.like}>
                <Icon
                  name="thumbs-up"
                  color="#285bd4"
                  size={20}
                  style={{marginRight: 5}}
                />
                <Text style={styles.txtBlue}>{props.data.rating}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
      {/* </Card> */}
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 4,
  },
  lineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#ddd',
    width: '90%',
  },
  img: {
    width: 140,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumb: {
    width: '80%',
    height: '80%',
    borderRadius: 4,
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
  txtGray: {
    fontSize: 15,
    color: '#acacac',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  daftar: {
    color: '#acacac',
  },
  body: {flex: 1, backgroundColor: '#fff', marginTop: 10},
  like: {
    width: 60,
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: '#285bd4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  status: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#285bd4',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  noactive: {
    backgroundColor: '#ddd',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  txtBlue: {
    color: '#285bd4',
  },
  cta: {
    marginTop: 5,
    flexDirection: 'row',
  },
});
export default ListLaundry;
