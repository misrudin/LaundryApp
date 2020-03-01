import {combineReducers} from 'redux';
import laundryReducer from './laundry';
import categoryReducer from './category';
import cartReducer from './cart';

const reducers = combineReducers({
  laundry: laundryReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default reducers;
