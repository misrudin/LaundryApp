import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {HeaderOrders} from '../Components/Header';
import ListOrder from '../Components/ListOrder';
import {useDispatch, useSelector} from 'react-redux';
import {getAllData, getDetail} from '../Public/redux/actions/orders';

const Laundry2 = props => {
  // const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const {data, detail} = useSelector(state => state.orders);
  const getData = async () => {
    await dispatch(getAllData(1, 0));
    console.warn(data);
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
          {data.map((data, index) => {
            return <ListOrder key={index} data={data} />;
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
