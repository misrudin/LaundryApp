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
import {addLaundry} from '../Public/redux/actions/laundry';
import {editRole} from '../Public/redux/actions/user';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';

const Open = props => {
  const [Name, setName] = useState('');
  const [image, setImage] = useState('');
  const [Specific, setSpecific] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const {isPending} = useSelector(state => state.laundry);

  useEffect(() => {
    // console.warn(props.route.params.id_user);
  }, []);

  const showImage = () => {
    const options = {
      title: 'Add product image',
      mediaType: 'photo',
      maxWidth: 1024,
      maxHeight: 1024,
      noData: true,
      cropping: true,
      storageOptions: {
        skipBackup: true,
        path: 'posApp',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response);
      }
    });
  };

  const clear = async () => {
    setName('');
    setAddress('');
    setSpecific('');
    setPhone('');
    setImage('');
    await AsyncStorage.removeItem('Token');
    await AsyncStorage.removeItem('id');
    await props.navigation.navigate('Splash');
  };

  const daftar = async () => {
    let fd = new FormData();
    fd.append('name', Name);
    fd.append('address', address);
    fd.append('user_id', props.route.params.id_user);
    fd.append('description', Specific);
    fd.append('phone', phone);
    fd.append('image', {
      uri: image.uri,
      name: image.fileName,
      type: image.type,
    });
    await dispatch(addLaundry(fd));
    await dispatch(editRole(props.route.params.id_user));
    // console.warn(fd);
    Alert.alert(
      'Congratulation',
      'Succes Register, please Login!',
      [{text: 'OK', onPress: () => clear()}],
      {cancelable: false},
    );
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
            <TextInput
              style={styles.textInput}
              placeholder="Laundry Name"
              onChangeText={e => setName(e)}
              value={Name}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Address"
              onChangeText={e => setAddress(e)}
              value={address}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Specific Address"
              onChangeText={e => setSpecific(e)}
              value={Specific}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Phone Number"
              keyboardType={'number-pad'}
              onChangeText={e => setPhone(e)}
              value={phone}
            />
          </View>
          <View style={styles.imgConatiner}>
            <TouchableOpacity style={styles.img} onPress={showImage}>
              <Image source={{uri: image.uri}} style={styles.images} />
              <Text style={styles.labelimage}>Add image</Text>
            </TouchableOpacity>
            <View style={styles.txtContainer}>
              <View style={styles.inputContainer}>
                <Text>Selamt bergabung</Text>
              </View>
            </View>
          </View>
          <View style={styles.botom}>
            <TouchableOpacity onPress={() => daftar()}>
              {isPending ? (
                <ActivityIndicator size="large" color="#285bd4" />
              ) : (
                <Text style={styles.btn}>REGISTER LAUNDRY</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Acount')}>
              <Text style={styles.have}>Cancel</Text>
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
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
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
  botom: {
    marginTop: 40,
    alignItems: 'center',
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: values.light,
    backgroundColor: values.primaryColor,
    fontWeight: 'bold',
  },
  have: {
    color: values.primaryColor,
    fontSize: 16,
    marginTop: 20,
  },
  imgConatiner: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContainer: {
    flex: 1,
    marginLeft: 10,
  },
  images: {
    borderWidth: 1,
    width: 130,
    height: 130,
    borderRadius: 5,
    borderColor: '#333',
  },
  labelimage: {
    position: 'absolute',
    color: '#acacac',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Open;
