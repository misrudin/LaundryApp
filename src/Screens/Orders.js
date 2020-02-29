import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ListOrder from '../Components/ListOrder';
import Header from '../Components/Header';

const Laundry2 = () => {
  return (
    <>
      <Header />
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
