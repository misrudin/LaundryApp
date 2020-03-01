import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import ListLaundry from '../Components/ListLaundry';
import Header from '../Components/Header';
import {Card} from 'native-base';
import {connect} from 'react-redux';
import {getAllData} from '../Public/redux/actions/laundry';
import _ from 'lodash';

class Laundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      laundry: [],
      loading: true,
      page: 1,
    };
    this.handleLoadMore = _.debounce(this.handleLoadMore, 200);
  }

  getData = async () => {
    await this.props.dispatch(getAllData(this.state.page));
    this.setState({
      laundry: this.state.laundry.concat(this.props.laundry.data[2]),
    });
    console.log(this.state.laundry);
  };

  componentDidMount() {
    this.getData();
  }

  handleLoadMore = () => {
    if (this.state.page < this.props.laundry.data[0])
      this.setState(
        {
          page: this.state.page + 1,
        },
        async () => {
          await this.getData();
        },
      );
  };

  render() {
    return (
      <View style={styles.bgWhite}>
        <Header />
        <Card style={styles.container}>
          <View style={styles.content}>
            <FlatList
              data={this.state.laundry}
              renderItem={({item}) => <ListLaundry data={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={0.1}
            />
            {this.props.laundry.isPending ? (
              <ActivityIndicator
                size="large"
                color="#ff33ff"
                style={styles.loading}
              />
            ) : null}
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    height: '82%',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  content: {flex: 1, paddingBottom: 25},
  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const mapStateToProps = ({laundry}) => {
  return {
    laundry,
  };
};

export default connect(mapStateToProps)(Laundry);
