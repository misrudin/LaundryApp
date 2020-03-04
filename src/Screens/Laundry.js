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
import {HeaderLaundry} from '../Components/Header';
import {Card, Picker} from 'native-base';
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
      showFilter: false,
      sort: '',
    };
    this.handleLoadMore = _.debounce(this.handleLoadMore, 1);
    // this.search = _.debounce(this.search, 1);
  }

  getData = async () => {
    await this.props.dispatch(getAllData(this.state.page));
    this.setState({
      laundry: this.state.laundry.concat(this.props.laundry.data[2]),
    });
  };

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState(
        {
          laundry: [],
          page: 1,
        },
        () => {
          this.getData();
        },
      );
    });
  }

  handleLoadMore = () => {
    if (this.state.page < this.props.laundry.data[0]) {
      this.setState(
        {
          page: this.state.page + 1,
        },
        async () => {
          await this.getData();
        },
      );
    }
  };

  showDetail = data => {
    this.props.navigation.navigate('DetailLaundry', {data});
    // console.warn(data.id);
  };
  // Sort
  handleChangeSort = e => {
    this.setState({sort: e});
    this.list();
    // console.warn(this.state.sort)
  };
  list = () => {
    console.log(this.state.laundry);
    this.setState(state => {
      if (state.sort === 'id') {
        state.laundry.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else if (state.sort === 'name') {
        state.laundry.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else {
        state.laundry.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
    });
  };

  render() {
    const Filter = () => {
      return (
        <View style={{flex: 0.1}}>
          <Picker
            selectedValue={this.state.sort}
            style={{height: 5}}
            onValueChange={value => this.handleChangeSort(value)}>
            <Picker.Item label="id" value="id" />
            <Picker.Item label="name" value="name" />
          </Picker>
        </View>
      );
    };
    return (
      <View style={styles.bgWhite}>
        <HeaderLaundry />
        <View style={styles.cover}>
          <Card style={styles.container}>
            <Filter onChange={this.handleChangeSort} />
            <View style={styles.content}>
              {this.state.laundry ? (
                <FlatList
                  data={this.state.laundry}
                  renderItem={({item, index}) => (
                    <ListLaundry
                      key={index}
                      data={item}
                      detail={this.showDetail}
                    />
                  )}
                  keyExtractor={item => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                  onEndReached={this.handleLoadMore}
                  onEndReachedThreshold={0.5}
                />
              ) : (
                <Text>Empty List</Text>
              )}
            </View>
            {this.props.laundry.isPending ? (
              <ActivityIndicator
                size="large"
                color="#285bd4"
                style={styles.loading}
              />
            ) : null}
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  content: {flex: 1, paddingBottom: 125},
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

export default connect(mapStateToProps)(Laundry);
