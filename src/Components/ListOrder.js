import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card} from 'native-base';

const List2 = props => {
  return (
    <Card>
      <View style={styles.order}>
        <Text style={styles.name}>{props.data.name} (Biasa)</Text>
        <View style={styles.detail}>
          <View style={styles.left}>
            <Text>Kiloan (1kg) 5000</Text>
            <Text>Antar Jemput</Text>
          </View>
          <View style={styles.right}>
            <Text>50000</Text>
            <Text>50000</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.left}>Total</Text>
          <Text>100000</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.status}>Selesai</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  order: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  name: {
    color: '#362dae',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  status: {
    fontWeight: 'bold',
    color: '#362dae',
  },
});

export default List2;
