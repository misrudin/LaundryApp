import axios from 'axios';
import {Link} from '../../env';

const URL = Link();

export const getAllData = (iduser, status) => {
  return {
    type: 'GET_DATA',
    payload: axios.get(URL + `orders?id=1&status=0`),
  };
};
export const getDetail = (id, status) => {
  return {
    type: 'DETAIL',
    payload: axios.get(URL + `orders?id${id}&status=${status}`),
  };
};
