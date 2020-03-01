import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Card, Form} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {getDetail, getfeature} from '../Public/redux/actions/laundry';
import styles from './css';
import {
  LaundryDetails,
  LaundryHead,
  LaundryFeature,
} from '../Components/MyLaundry/LaundryDetail';

class MyLaundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: [],
      qty: [],
      metode: [],
      estimasi: [],
    };
  }

  getData = async () => {
    const id = 61;
    await this.props.dispatch(getDetail(id));
    await this.props.dispatch(getfeature(id, 1));
    await this.props.dispatch(getfeature(id, 2));
    this.setState({
      detail: this.props.laundry.detail,
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.txtHeader}>CuciKont</Text>
        </View>
        <ScrollView style={{backgroundColor: '#fff'}}>
          <View style={styles.container}>
            <View style={styles.topArea}>
              {this.state.detail.map(data => {
                return <LaundryHead data={data} />;
              })}
            </View>
            <Card>
              {this.state.detail.map(data => {
                return <LaundryDetails data={data} />;
              })}
            </Card>
            <Card>
              <View style={styles.midArea}>
                <View style={styles.title}>
                  <Text style={styles.name}>Features</Text>
                  <Icon name="edit" size={20} color="#285bd4" />
                </View>
                <View style={styles.fitur}>
                  <Text style={styles.nameDetail}>Qty</Text>
                  <View style={styles.areaFitur}>
                    <LaundryFeature />
                  </View>
                </View>
                <View style={styles.fitur}>
                  <Text style={styles.nameDetail}>Metode</Text>
                  <View style={styles.areaFitur}>
                    <LaundryFeature />
                  </View>
                </View>
                <View style={styles.fitur}>
                  <Text style={styles.nameDetail}>Estimasi</Text>
                  <View style={styles.areaFitur}>
                    <LaundryFeature />
                  </View>
                </View>
              </View>
            </Card>
            <Card>
              <View style={styles.midArea}>
                <View style={styles.title}>
                  <Text style={styles.name}>History</Text>
                </View>
              </View>
            </Card>
            <Card>
              <View style={styles.midArea}>
                <View style={styles.title}>
                  <Text style={styles.name}>History</Text>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = ({laundry}) => {
  return {
    laundry,
  };
};
export default connect(mapStateToProps)(MyLaundry);
