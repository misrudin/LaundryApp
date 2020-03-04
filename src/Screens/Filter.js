import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
} from 'react-native';
import ListLaundry from '../Components/ListLaundry';
import {Card} from 'native-base';
import {connect} from 'react-redux';
import {filter} from '../Public/redux/actions/laundry';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './css';

import _ from 'lodash';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      laundry: [],
      loading: true,
      page: 1,
      showFilter: false,
    };
    this.search = _.debounce(this.search, 1000);
  }

  getData = async q => {
    await this.props.dispatch(filter(q));
    this.setState({
      laundry: this.props.laundry.filter,
    });
  };

  showDetail = data => {
    this.props.navigation.navigate('DetailLaundry', {data});
  };

  search = q => {
    if (q) {
      this.getData(q);
    } else {
      this.setState({
        laundry: [],
      });
    }
  };

  render() {
    return (
      <View style={styles.bgWhite}>
        <View style={styles.contain}>
          <View style={styles.location}>
            <Icon name="map-marker-alt" color="#fff" size={20} solid />
            <Text style={styles.thisLocation}>Pesona Depok Estate B2</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.inputArea}>
              <TextInput
                placeholder="I want to search ..."
                style={styles.search}
                onChangeText={q => this.search(q)}
                autoFocus
              />
              <Icon name="search" size={20} color="#777" style={styles.icon} />
            </View>
          </View>
        </View>
        <View style={stylesb.cover}>
          <Card style={stylesb.container}>
            <View style={stylesb.content}>
              <FlatList
                data={this.state.laundry}
                renderItem={({item, index}) => (
                  <ListLaundry
                    key={index}
                    data={item}
                    detail={this.showDetail}
                  />
                )}
                // keyExtractor={item => item.index.toString()}
                showsVerticalScrollIndicator={false}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={0.5}
              />
            </View>
            {this.props.laundry.isPending ? (
              <ActivityIndicator
                size="large"
                color="#285bd4"
                style={stylesb.loading}
              />
            ) : null}
          </Card>
        </View>
      </View>
    );
  }
}

const stylesb = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    height: '100%',
    borderRadius: 0,
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  content: {flex: 1, paddingBottom: 60},
  loading: {
    position: 'absolute',
    top: 0,
    bottom: '50%',
    left: 0,
    right: 0,
  },
  cover: {
    backgroundColor: '#fff',
  },
});

const mapStateToProps = ({laundry}) => {
  return {
    laundry,
  };
};

export default connect(mapStateToProps)(Filter);
