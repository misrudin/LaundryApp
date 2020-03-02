import {combineReducers} from 'redux';
import laundryReducer from './laundry';
import userReducer from './user';
import categoryReducer from './category';
import cartReducer from './cart';

const reducers = combineReducers({
  laundry: laundryReducer,
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default reducers;
