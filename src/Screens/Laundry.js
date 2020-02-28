import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ListLaundry from '../Components/ListLaundry';
import Header from '../Components/Header';

const Laundry = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <ListLaundry />
          <ListLaundry />
          <ListLaundry />
          <ListLaundry />
          <ListLaundry />
          <ListLaundry />
          <ListLaundry />
          <ListLaundry />
          <ListLaundry />
          <ListLaundry />
          <ListLaundry />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 10,
  },
});

export default Laundry;
