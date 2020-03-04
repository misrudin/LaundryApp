/* eslint-disable react-hooks/exhaustive-deps */
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
      .get(URL + 'features/')
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
  }, [detail, getData, loading, props.route.params.data]);

  let estimasi = feature.filter(data => {
    return data.category === 3;
  });
  let qty = feature.filter(data => {
    return data.category === 2;
  });
  let metode = feature.filter(data => {
    return data.category === 1;
  });

  const handleorder = () => {
    // alert('muncul');
    const data = {
      user_id: 2,
      laundry_id: props.route.params.id,
      price: 5000,
    };
    axios
      .post(URL + 'orders', data)
      .then(res => {
        alert('sukses');
      })
      .catch(err => alert('gagal'));
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
            </View>
            <View style={styles.fitur}>
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

            {/* method */}
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
            </View>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.btn} onPress={handleorder}>
                <Text style={styles.txtBtn}>Order</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 10,
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
    marginTop: 5,
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
    paddingTop: 40,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#285bd4',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 20,
  },
  txtBtn: {
    color: '#fff',
    fontWeight: 'bold',
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
  }, [props.data]);

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
