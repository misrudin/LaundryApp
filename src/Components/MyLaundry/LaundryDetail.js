import styles from '../../Screens/css';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export const LaundryHead = props => {
  return (
    <Card style={styles.imgArea}>
      <View style={styles.img}>
        <Image source={{uri: props.data.image}} style={styles.imgLaundry} />
      </View>
      <View style={styles.detail}>
        <Text style={styles.name}>{props.data.name}</Text>
        <Text style={styles.address}>{props.data.address}</Text>

        <View style={styles.like}>
          <Icon
            name="thumbs-up"
            color="#285bd4"
            size={20}
            style={{marginRight: 5}}
          />
          <Text style={styles.txtBlue}>{props.data.rating}</Text>
        </View>
      </View>
    </Card>
  );
};
export const LaundryDetails = props => {
  return (
    <>
      <View style={styles.midArea}>
        <View style={styles.title}>
          <Text style={styles.name}>Details</Text>
          <Icon name="edit" size={20} color="#285bd4" />
        </View>
        <View style={styles.body}>
          <Text style={styles.nameDetail}>Address</Text>
          <Text style={styles.details}>{props.data.address}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.nameDetail}>Phone</Text>
          <Text style={styles.details}>{props.data.phone}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.nameDetail}>Jam Buka</Text>
          <Text style={styles.details}>
            {props.data.open} - {props.data.close}
          </Text>
        </View>
      </View>
    </>
  );
};
export const LaundryFeature = props => {
  console.log(props.data);
  return (
    <>
      <View style={styles.contentFitur}>
        <TouchableOpacity activeOpacity={0.3}>
          <Text style={styles.textFitur}>
            {props.data.feature} {props.rules} {props.price}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.3}>
          <Icon
            name="window-close"
            color="red"
            size={20}
            style={styles.trash}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
