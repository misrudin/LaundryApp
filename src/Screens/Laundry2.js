import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ListLaundry from '../Components/List2';

const Laundry2 = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});

export default Laundry2;
