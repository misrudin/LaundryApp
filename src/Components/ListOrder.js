import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card} from 'native-base';

const List2 = props => {
  const status = () => {
    switch (props.data.status) {
      case 0:
        return 'Menunggu';
      case 1:
        return 'Diterima';
      case 2:
        return 'Ditolak';
      case 3:
        return 'Proses';
      case 4:
        return 'Selesai';

      default:
        return 'Selesai';
    }
  };
  let estimasi = props.detail.filter(data => {
    return data.category === 3;
  });
  let qty = props.detail.filter(data => {
    return data.category === 2;
  });
  let metode = props.detail.filter(data => {
    return data.category === 1;
  });
  return (
    <Card>
      <View style={styles.order}>
        {estimasi.map(e => {
          return (
            <Text style={styles.name}>
              {props.data.name} ({e.category === 3 ? e.name : 'Biasa'})
            </Text>
          );
        })}
        <View style={styles.detail}>
          {qty.map(e => {
            return (
              <>
                <View style={styles.left}>
                  <Text>
                    {e.name} ({e.qty}) {e.hargaFeature}
                  </Text>
                </View>
                <View style={styles.right}>
                  <Text>{e.total}</Text>
                </View>
              </>
            );
          })}
        </View>
        <View style={styles.detail}>
          {metode.map(e => {
            return (
              <>
                <View style={styles.left}>
                  <Text>
                    {e.name} {e.hargaFeature}
                  </Text>
                </View>
                <View style={styles.right}>
                  <Text>{e.total}</Text>
                </View>
              </>
            );
          })}
        </View>
        <View style={styles.footer}>
          <Text style={styles.left}>Total</Text>
          <Text>{props.data.price}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.status}>{status()}</Text>
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
