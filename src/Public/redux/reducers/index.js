import {combineReducers} from 'redux';
import laundryReducer from './laundry';
import userReducer from './user';
import ordersReducer from './orders';
import cartReducer from './cart';

const reducers = combineReducers({
  laundry: laundryReducer,
  user: userReducer,
  orders: ordersReducer,
  cart: cartReducer,
});

export default reducers;
