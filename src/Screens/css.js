import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: '#285bd4',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  txtHeader: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  topArea: {
    width: '100%',
    marginTop: 10,
  },
  imgArea: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 100,
    position: 'relative',
    overflow: 'hidden',
  },
  imgLaundry: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
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
  detail: {
    marginLeft: 10,
    paddingVertical: 10,
  },
  midArea: {
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nameDetail: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#242323',
    marginBottom: 10,
  },
  details: {
    color: '#242323',
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
  contentFitur: {
    backgroundColor: '#fff',
    marginTop: 5,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  txtBlue: {
    color: '#285bd4',
  },
  loading: {
    marginTop: 20,
  },
  scroll: {
    backgroundColor: '#fff',
  },
  trash: {marginLeft: 5},
});
