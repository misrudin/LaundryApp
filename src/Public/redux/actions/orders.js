import axios from 'axios';
import {Link} from '../../env';

const URL = Link();

export const getDataOrders = (id, status) => {
  return {
    type: 'GET_ORDERS',
    payload: axios.get(URL + `orders?id=${id}&status=${status}`),
  };
};
export const getDetailOrders = id => {
  return {
    type: 'DETAIL_ORDERS',
    payload: axios.get(URL + `detail?id=${id}`),
  };
};
export const addOrder = data => {
  return {
    type: 'ORDERS',
    payload: axios.post(URL + 'orders', data),
  };
};
