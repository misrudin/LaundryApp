import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  return (
    <View
      style={{
        position: 'relative',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#059e05',
        flexDirection: 'row',
      }}>
      <View style={{flex: 1, position: 'relative'}}>
        <TextInput placeholder="I want to search ..." style={styles.search} />
        <Icon
          name="search"
          size={20}
          color="#777"
          style={{position: 'absolute', top: 10, left: 10}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  },
  search: {
    backgroundColor: '#eee',
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingRight: 20,
    color: 'grey',
    fontSize: 14,
    paddingVertical: 5,
  },
});

export default Header;
