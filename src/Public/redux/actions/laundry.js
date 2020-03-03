import axios from 'axios';
import {Link} from '../../env';

const URL = Link();

export const getAllData = page => {
  return {
    type: 'GET_DATA',
    payload: axios.get(URL + `laundry?page=${page}`),
  };
};
export const getDetail = id => {
  return {
    type: 'GET_DETAIL',
    payload: axios.get(URL + `laundry/detail?id=${id}`),
  };
};
export const getfeature = id => {
  return {
    type: 'GET_FEATURE',
    payload: axios.get(URL + `laundry/join?id=${id}`),
  };
};
export const filter = q => {
  return {
    type: 'FILTER',
    payload: axios.get(URL + `laundry/filter?q=${q}`),
  };
};
