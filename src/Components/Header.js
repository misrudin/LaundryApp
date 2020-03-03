import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Header = props => {
  return (
    <>
      <View style={styles.contain}>
        <View style={styles.location}>
          <Icon name="map-marker-alt" color="#fff" size={20} solid />
          <Text style={styles.thisLocation}>Pesona Depok Estate B2</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inputArea}>
            <TextInput
              placeholder="I want to search ..."
              style={styles.search}
              onChangeText={() => props.onSearch('kontol')}
            />
            <Icon name="search" size={20} color="#777" style={styles.icon} />
          </View>
        </View>
        {/* <View style={styles.botom}>
          <View style={styles.headerBottom}>
            <Icon name="sliders-h" color="#285bd4" size={20} solid />
            <Text style={styles.txtBottom}>Filters</Text>
          </View>
          <View style={styles.headerBottom}>
            <Icon name="star" color="#285bd4" size={20} solid />
            <Text style={styles.txtBottom}>4.5 and above</Text>
          </View>
          <View style={styles.headerBottom}>
            <Icon name="angle-down" color="#285bd4" size={20} solid />
            <Text style={styles.txtBottom}>Distance</Text>
          </View>
        </View> */}
      </View>
    </>
  );
};
export const HeaderLaundry = props => {
  return (
    <>
      <View style={styles.contain}>
        <View style={styles.body}>
          <View style={styles.inputArea}>
            <View style={styles.titleContainer}>
              <Icon name="map-marker-alt" color="#fff" size={20} solid />
              <Text style={styles.title}>Laundry</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export const HeaderOrders = props => {
  return (
    <>
      <View style={styles.contain}>
        <View style={styles.body}>
          <View style={styles.inputArea}>
            <View style={styles.titleContainer}>
              <Icon name="map-marker-alt" color="#fff" size={20} solid />
              <Text style={styles.title}>Order</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contain: {
    backgroundColor: '#362dae',
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    flex: 1,
  },
  search: {
    backgroundColor: '#fff',
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    paddingRight: 20,
    color: 'grey',
    fontSize: 14,
    paddingVertical: 5,
  },
  body: {
    position: 'relative',
    paddingVertical: 10,
    backgroundColor: '#362dae',
    flexDirection: 'row',
  },
  inputArea: {flex: 1, position: 'relative'},
  icon: {position: 'absolute', top: 10, left: 10},
  location: {
    paddingBottom: 5,
    flexDirection: 'row',
  },
  thisLocation: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  headerBottom: {
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBottom: {
    color: '#285bd4',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  botom: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
