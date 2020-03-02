import React, {Component} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {Card} from 'native-base';
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
      features: [],
    };
  }

  getData = async () => {
    const id = 61;
    await this.props.dispatch(getDetail(id));
    await this.props.dispatch(getfeature(id));
    this.setState({
      detail: this.props.laundry.detail,
      features: this.props.laundry.feature,
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    let qty = this.state.features.filter(data => {
      return data.category === 3;
    });
    let metode = this.state.features.filter(data => {
      return data.category === 2;
    });
    let estimasi = this.state.features.filter(data => {
      return data.category === 1;
    });
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.txtHeader}>Cuciwae</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {!this.props.laundry.isPending ? (
            <View style={styles.container}>
              <View style={styles.topArea}>
                {this.state.detail.map(data => {
                  return <LaundryHead key={data.id} data={data} />;
                })}
              </View>
              <Card>
                {this.state.detail.map(data => {
                  return <LaundryDetails key={data.id} data={data} />;
                })}
              </Card>
              <Card>
                <View style={styles.midArea}>
                  <View style={styles.title}>
                    <Text style={styles.name}>Features</Text>
                  </View>
                  <View style={styles.fitur}>
                    <Text style={styles.nameDetail}>Qty</Text>
                    <View style={styles.areaFitur}>
                      {qty.map((data, index) => {
                        return (
                          <LaundryFeature
                            key={index}
                            data={data}
                            rules={`- min(${data.rules}) -kg`}
                            price={`- ${data.price}/kg`}
                          />
                        );
                      })}
                    </View>
                  </View>
                  <View style={styles.fitur}>
                    <Text style={styles.nameDetail}>Metode</Text>
                    <View style={styles.areaFitur}>
                      {metode.map((data, index) => {
                        return (
                          <LaundryFeature
                            key={index}
                            data={data}
                            rules={`- max(${data.rules}) km`}
                            price={`- ${data.price}/km`}
                          />
                        );
                      })}
                    </View>
                  </View>
                  <View style={styles.fitur}>
                    <Text style={styles.nameDetail}>Estimasi</Text>
                    <View style={styles.areaFitur}>
                      {estimasi.map((data, index) => {
                        return (
                          <LaundryFeature
                            key={index}
                            data={data}
                            rules={`- (${data.rules}) day`}
                            price={`- ${data.price}/kg`}
                          />
                        );
                      })}
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
          ) : (
            <ActivityIndicator
              size="large"
              color="#ff33ff"
              style={styles.loading}
            />
          )}
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
