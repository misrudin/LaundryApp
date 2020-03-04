import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {HeaderOrders} from '../Components/Header';
import ListOrder from '../Components/ListOrder';
import {useDispatch, useSelector} from 'react-redux';
import {getDataOrders, getDetailOrders} from '../Public/redux/actions/orders';

const Laundry2 = props => {
  // const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const {dataOrders, detailOrders} = useSelector(state => state.orders);
  const getData = async () => {
    await dispatch(getDataOrders(1, 0));
    await dispatch(getDetailOrders(1));
  };

  useEffect(() => {
    const _unsubscribe = props.navigation.addListener('focus', () => {
      getData();
    });
  }, []);

  return (
    <>
      <HeaderOrders />
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
          {dataOrders.map((data, index) => {
            return <ListOrder key={index} data={data} detail={detailOrders} />;
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
});

export default Laundry2;
