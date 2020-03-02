import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ListOrder from '../Components/ListOrder';

const Laundry2 = () => {
  return (
    <>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <ListOrder />
          <ListOrder />
          <ListOrder />
          <ListOrder />
          <ListOrder />
          <ListOrder />
          <ListOrder />
          <ListOrder />
          <ListOrder />
          <ListOrder />
          <ListOrder />
          <ListOrder />
          <ListOrder />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});

export default Laundry2;
