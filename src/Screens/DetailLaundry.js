import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
// import {Content, Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailLaundry = () => {
  return (
    <>
      <ScrollView style={{backgroundColor: '#dedede'}}>
        <View style={styles.container}>
          <View style={styles.imgArea}>
            <Image
              source={require('../Assets/Img/1.jpg')}
              style={styles.imgLaundry}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.detail}>
              <Text style={styles.name}>Laundry KekMaria</Text>
              <Text style={styles.address}>Address</Text>
              <View style={styles.rating}>
                <Icon name="star" color="#285bd4" solid />
                <Icon name="star" color="#285bd4" solid />
                <Icon name="star" color="#285bd4" solid />
                <Icon name="star" color="#285bd4" solid />
                <Icon name="star" color="#285bd4" solid />
              </View>
            </View>
            <View style={styles.status}>
              <View style={styles.active} />
              <Text style={styles.address}>Open</Text>
            </View>
          </View>
        </View>
        <View style={styles.fitur}>
          <Text style={styles.name}>Qty</Text>
          <View style={styles.areaFitur}>
            <View style={styles.contentFitur}>
              <Text style={styles.textFitur}>Satuan</Text>
            </View>
            <View style={styles.contentFitur}>
              <Text style={[styles.textFitur, styles.select]}>Kiloan</Text>
            </View>
          </View>
          <TextInput
            placeholder="Udah tau beratnya ? --- Kg"
            style={styles.txtInput}
            keyboardType={'numeric'}
          />
        </View>

        {/* method */}
        <View style={styles.fitur}>
          <Text style={styles.name}>Metode</Text>
          <View style={styles.areaFitur}>
            <View style={styles.contentFitur}>
              <Text style={[styles.textFitur, styles.select]}>
                Antar Jemput
              </Text>
            </View>
            <View style={styles.contentFitur}>
              <Text style={styles.textFitur}>Antar</Text>
            </View>
            <View style={styles.contentFitur}>
              <Text style={styles.textFitur}>Jemput</Text>
            </View>
          </View>
        </View>
        <View style={styles.fitur}>
          <Text style={styles.name}>Estmasi</Text>
          <View style={styles.areaFitur}>
            <View style={styles.contentFitur}>
              <Text style={styles.textFitur}>Express</Text>
            </View>
            <View style={styles.contentFitur}>
              <Text style={[styles.textFitur, styles.select]}>Biasa</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.btn}>
            <Text style={styles.txtBtn}>Oke</Text>
          </View>
          <View style={styles.btn}>
            <Text style={styles.txtBtn}>Males</Text>
          </View>
        </View>
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
  rating: {
    marginTop: 10,
    flexDirection: 'row',
  },
  address: {
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
});
export default DetailLaundry;
