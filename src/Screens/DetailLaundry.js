import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Picker,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import {getfeature, getDetail} from '../Public/redux/actions/laundry';
import {addOrder} from '../Public/redux/actions/orders';
import axios from 'axios';
import {Link} from '../Public/env';

const URL = Link();

const DetailLaundry = props => {
  const dispatch = useDispatch();
  // const {} = useSelector(state => state.laundry);
  const [idFeature, setId] = useState('');
  const [qtyOrder, setQty] = useState('');
  const [detail, setDetail] = useState([]);
  const [feature, setFeature] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async id => {
    await axios
      .get(URL + `laundry/join?id=${id}`)
      .then(data => {
        setFeature(data.data.result);
        // setLoading(false);
      })
      .catch(err => console.log(err));
    await axios
      .get(URL + `laundry/detail?id=${id}`)
      .then(res => {
        setDetail(res.data.result);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const data = props.route.params.data;
    getData(data.id);
  }, []);

  let estimasi = feature.filter(data => {
    return data.category === 3;
  });
  let qty = feature.filter(data => {
    return data.category === 2;
  });
  let metode = feature.filter(data => {
    return data.category === 1;
  });

  const handleorder = async () => {
    const data = {
      user_id: 1,
      laundry_id: props.route.params.id,
      price: 100,
    };
    await axios
      .post(URL + `orders`, data)
      .then(res => {
        alert('oke');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <ScrollView style={{backgroundColor: '#dedede'}}>
        {loading ? (
          <ActivityIndicator size="large" color="#285bd4" />
        ) : (
          <>
            <View style={styles.container}>
              <View style={styles.imgArea}>
                <Image
                  source={{uri: detail[0].image}}
                  style={styles.imgLaundry}
                />
              </View>
              <View style={styles.content}>
                <View style={styles.detail}>
                  <TouchableOpacity onPress={() => alert('oke')}>
                    <Text style={styles.name}>
                      {detail[0].name} ({detail[0].phone}){' '}
                      <Icon name="phone" color="#285bd4" />
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.txtGray}>{detail[0].address}</Text>
                  <View style={styles.like}>
                    <Icon
                      name="thumbs-up"
                      color="#285bd4"
                      size={20}
                      style={{marginRight: 5}}
                    />
                    <Text style={styles.txtBlue}>{detail[0].rating}</Text>
                  </View>
                </View>
                <View style={styles.status}>
                  <View
                    style={
                      detail[0].status === 'Online'
                        ? styles.active
                        : styles.noactive
                    }
                  />
                  <Text
                    style={
                      detail[0].status === 'Online'
                        ? styles.txtBlue
                        : styles.txtGray
                    }>
                    {detail[0].status}
                  </Text>
                </View>
              </View>
              <View style={styles.laundryIdentity}>
                <View style = {styles.idChild}>
                  <Text style = {styles.idTitle}>Work Hour</Text>
                  <Text style = {styles.idSub}>09.00-22.00</Text>
                </View>
                <View style = {styles.idChild}>
                  <Text style = {styles.idTitle}>Min. Weight</Text>
                  <Text style = {styles.idSub}>2kg</Text>                  
                </View>
                <View style = {styles.idChild}>
                  <Text style = {styles.idTitle}>Cost</Text>
                  <Text style = {styles.idSub}>Rp 5000/kg</Text>                  
                </View>
              </View>
              <View style = {styles.formOrder}>
                <View style = {styles.formTitle}>
                    <Text style = {{fontWeight: 'bold', fontSize: 18}}>Place Your Order</Text>
                </View>
                <View style = {styles.formGroup}>
                  <View style = {styles.label}>
                    <Text>Quantity (kg): </Text>
                  </View>
                  <View style = {styles.formPicker}>
                    <TextInput placeholder='enter the weight' style = {{borderBottomWidth: 1, width: '90%', height: '80%'}}/>
                  </View>
                </View>
                <View style = {styles.formGroup}>
                  <View style = {styles.label}>
                  <Text>Delivery:</Text>
                  </View>
                  <View style = {styles.formPicker}>
                    <Picker 
                      style={styles.pickerInput}>
                      <Picker.Item label="None" value="java" />
                      <Picker.Item label="Antar Jemput" value="js" />
                    </Picker>
                  </View>
                </View>
                <View style = {styles.formGroup}>
                  <View style = {styles.label}>
                  <Text>Estimasi</Text>
                  </View>
                  <View style = {styles.formPicker}>
                    <Picker 
                      style={styles.pickerInput}>
                      <Picker.Item label="Satuan" value="java" />
                      <Picker.Item label="Kiloan" value="js" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>
            {/* <View style={styles.fitur}>
              <Text style={styles.name}>Qty</Text>
              <View style={styles.areaFitur}>
                {qty.map((qty, index) => {
                  return <FeatureDate key={index} data={qty} />;
                })}
              </View>
              <TextInput
                placeholder="Udah tau jumlahnya ? --- Kg/pcs"
                style={styles.txtInput}
                keyboardType={'numeric'}
              />
            </View>

            <View style={styles.fitur}>
              <Text style={styles.name}>Metode</Text>
              <View style={styles.areaFitur}>
                {metode.map((metod, index) => {
                  return <FeatureDate key={index} data={metod} />;
                })}
              </View>
            </View>
            <View style={styles.fitur}>
              <Text style={styles.name}>Estmasi</Text>
              <View style={styles.areaFitur}>
                {estimasi.map((est, index) => {
                  return <FeatureDate key={index} data={est} />;
                })}
              </View>
            </View> */}

            <View style={styles.footer}>
              <TouchableOpacity style={styles.btn} onPress={handleorder}>
                <Text style={styles.txtBtn}>ORDER NOW</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelBtn} onPress={()=>props.navigation.navigate('Home')}>
                <Text style = {{color: values.primaryColor, fontSize: 16}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

const values = {
  light: '#FCFCFC',
  primaryColor: '#362DAE',
  form: '#FFF',
  success: '#48C888',
  fail: '#F54444',
  accent: '#E0EF0F',
};

const styles = StyleSheet.create({
  cancelBtn:{
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 100,
  },
  idSub:{
    color: '#888',
  },
  idTitle:{
    fontWeight: 'bold',
    paddingBottom: 4
  },
  idChild:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '30%',
  },
  laundryIdentity:{
    flexDirection: 'row',
    justifyContent:'space-around',
    width: '100%',
    height: 72,
  },
  pickerInput:{
    width: '90%',
    height: 50
  },
  formTitle:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%'
  },
  formGroup:{
    flexDirection: 'row',
    width: '100%',
    height: 50,
    marginBottom: 8,
  },
  label: {
    paddingLeft: 10,
    justifyContent: 'center',
    flex: 1
  },
  formPicker:{
    justifyContent: 'center',
    height: 50,
    flex: 2.5
  },
  formOrder:{
    alignItems: 'center',
    width: '100%',
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    flex: 1,
  },
  imgLaundry: {
    width: '100%',
    height: '100%',
  },
  imgArea: {
    height: 400,
    overflow: 'hidden',
  },
  detail: {
    marginTop: 20,
    paddingBottom: 10,
  },
  fitur: {
    paddingHorizontal: 20,
    marginTop: 8,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#242323',
    marginBottom: 10,
  },
  like: {
    width: 60,
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: '#285bd4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  txtGray: {
    fontSize: 15,
    color: '#acacac',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  status: {
    backgroundColor: '#fff',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#285bd4',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  noactive: {
    backgroundColor: '#ddd',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  contentFitur: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginRight: 5,
  },
  textFitur: {
    borderWidth: 2,
    borderColor: '#285bd4',
    borderRadius: 100,
    color: '#285bd4',
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 8,
    textAlign: 'center',
    alignItems: 'center',
    height: 30,
  },
  areaFitur: {
    flexDirection: 'row',
    paddingVertical: 10,
    flexWrap: 'wrap',
  },
  select: {
    backgroundColor: '#285bd4',
    color: '#fff',
  },
  noselect: {
    backgroundColor: '#fff',
    color: '#285bd4',
  },
  txtInput: {
    borderColor: '#eee',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  footer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: values.primaryColor,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 100,
    marginBottom: 8,
  },
  txtBtn: {
    color: values.light,
    fontSize: 18,
  },
  txtBlue: {
    color: '#285bd4',
  },
});

export default DetailLaundry;

export const FeatureDate = props => {
  const [load, setLoad] = useState(true);
  const [warna, setwarna] = useState(false);
  const [data, setName] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setName(props.data);
      // console.warn(props.data.feature);
      setLoad(false);
    }, 1000);
  }, []);

  const sewarna = () => {
    warna ? setwarna(false) : setwarna(true);
  };

  return (
    <>
      {load ? (
        <ActivityIndicator size="small" color="#285bd4" />
      ) : (
        <View style={styles.contentFitur}>
          <TouchableOpacity onPress={() => sewarna()}>
            <Text
              style={
                warna ? [styles.textFitur, styles.select] : styles.textFitur
              }>
              {data.feature} {data.price}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};
