import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {addFeature} from '../Public/redux/actions/laundry';

const EditHarga = props => {
  const [aj, setaj] = useState('0');
  const [kilo, setkilo] = useState('0');
  const [satuan, setsatuan] = useState('0');
  const [express, setexpress] = useState('0');
  const [biasa, setbiasa] = useState('0');
  const [id_Laundry, setIdLaundry] = useState('0');

  const dispatch = useDispatch();
  const {isPending} = useSelector(state => state.laundry);

  useEffect(() => {
    const data = props.route.params.data[0];
    setIdLaundry(data.id);
  }, []);

  const postantarJemput = async () => {
    const data = {
      id_laundry: id_Laundry,
      name: 'Antar Jemput',
      price: aj,
      category: 1,
    };
    dispatch(addFeature(data));
    // console.warn(id_Laundry);
  };
  const postkiloan = async () => {
    const data = {
      id_laundry: id_Laundry,
      name: 'Kiloan',
      price: kilo,
      category: 2,
    };
    dispatch(addFeature(data));
  };
  const postsatuan = async () => {
    const data = {
      id_laundry: id_Laundry,
      name: 'Satuan',
      price: satuan,
      category: 2,
    };
    dispatch(addFeature(data));
  };
  const postexpress = async () => {
    const data = {
      id_laundry: id_Laundry,
      name: 'Express',
      price: express,
      category: 3,
    };
    dispatch(addFeature(data));
  };
  const postbiasa = async () => {
    const data = {
      id_laundry: id_Laundry,
      name: 'Biasa',
      price: biasa,
      category: 3,
    };
    dispatch(addFeature(data));
  };
  return (
    <>
      <View style={styles.top} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#362dae"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.welcomeText}>
            <Text style={styles.txtTop}>Let's</Text>
            <Text style={styles.txtBotom}>Manage your Laundry !</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.txt}>Antar Jemput</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Price ..."
              keyboardType={'number-pad'}
              onChangeText={e => setaj(e)}
              value={aj}
            />
            <TouchableOpacity onPress={() => postantarJemput()}>
              {isPending ? (
                <ActivityIndicator size="large" color="#285bd4" />
              ) : (
                <Text style={styles.btn}>OK</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.txt}>Kiloan</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Price ..."
              keyboardType={'number-pad'}
              onChangeText={e => setkilo(e)}
              value={kilo}
            />
            <TouchableOpacity onPress={() => postkiloan()}>
              {isPending ? (
                <ActivityIndicator size="large" color="#285bd4" />
              ) : (
                <Text style={styles.btn}>OK</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.txt}>Satuan</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Price ..."
              keyboardType={'number-pad'}
              onChangeText={e => setsatuan(e)}
              value={satuan}
            />
            <TouchableOpacity onPress={() => postsatuan()}>
              {isPending ? (
                <ActivityIndicator size="large" color="#285bd4" />
              ) : (
                <Text style={styles.btn}>OK</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.txt}>Express</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Price ..."
              keyboardType={'number-pad'}
              onChangeText={e => setexpress(e)}
              value={express}
            />
            <TouchableOpacity onPress={() => postexpress()}>
              {isPending ? (
                <ActivityIndicator size="large" color="#285bd4" />
              ) : (
                <Text style={styles.btn}>OK</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.txt}>Biasa</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Price ..."
              keyboardType={'number-pad'}
              onChangeText={e => setbiasa(e)}
              value={biasa}
            />
            <TouchableOpacity onPress={() => postbiasa()}>
              {isPending ? (
                <ActivityIndicator size="large" color="#285bd4" />
              ) : (
                <Text style={styles.btn}>OK</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
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
  textInput: {
    backgroundColor: values.form,
    color: '#888',
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    marginHorizontal: 15,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
    flexDirection: 'row',
  },

  top: {
    width: 350,
    height: 350,
    backgroundColor: '#362dae',
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: 350,
  },
  txtBotom: {fontSize: 24, color: values.light},
  txtTop: {fontSize: 32, color: values.light},
  welcomeText: {
    paddingVertical: 80,
    alignItems: 'flex-end',
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: values.light,
    backgroundColor: values.primaryColor,
    fontWeight: 'bold',
    borderColor: '#fff',
    borderWidth: 1,
  },
  have: {
    color: values.primaryColor,
    fontSize: 16,
    marginTop: 20,
  },
  txt: {
    flex: 1,
  },
});

export default EditHarga;
